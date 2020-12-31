const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

const postPerPage = 20

const getFullPath = frontmatter => {
  const pathPrefix = _.get(frontmatter, 'pathPrefix', '')
  const slug = _.get(frontmatter, 'slug', '')
  return path.join(pathPrefix, slug)
}

const getAllTagsInPages = (markdownPages = []) => {
  const makeSlugTag = tag => _.kebabCase(tag.toLowerCase())

  return _(markdownPages)
    .map(post => _.get(post, 'node.frontmatter.tags'))
    .filter()
    .flatten()
    .uniq()
    .groupBy(makeSlugTag)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('./src/templates/ProjectTemplate.tsx')
    const postTemplate = path.resolve('./src/templates/PostTemplate.tsx')
    const blogListTemplate = path.resolve('./src/templates/BlogListTemplate.tsx')
    const tagsBlogListTemplate = path.resolve('./src/templates/TagsBlogListTemplate.tsx')

    resolve(
      graphql(`
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
            filter: { fileAbsolutePath: { ne: null }, frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  model
                  slug
                  pathPrefix
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const allMarkownPages = _.get(result, 'data.allMdx.edges', []).filter(edge => {
          return ['post', 'project'].includes(_.get(edge, 'node.frontmatter.model'))
        })

        const blogPosts = allMarkownPages.filter(
          edge => _.get(edge, 'node.frontmatter.model') === 'post'
        )

        const blogPostsPaginated = _.chunk(blogPosts, postPerPage)
        blogPostsPaginated.forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i}`,
            component: blogListTemplate,
            context: {
              limit: postPerPage,
              skip: i * postPerPage,
              numPages: blogPostsPaginated.length,
              currentPage: i,
              hasPrevPage: i > 0,
              hasNextPage: i < blogPostsPaginated.length - 1,
            },
          })
        })

        const postTagsGrouped = getAllTagsInPages(blogPosts)
        postTagsGrouped.forEach((tags, tagSlug) => {
          createPage({
            path: `/blog/tags/${tagSlug}`,
            component: tagsBlogListTemplate,
            context: {
              tags,
              tagSlug,
            },
          })
        })

        _.each(allMarkownPages, (post, index) => {
          const previous =
            index === allMarkownPages.length - 1 ? null : allMarkownPages[index + 1].node
          const next = index === 0 ? null : allMarkownPages[index - 1].node

          const { model } = post.node.frontmatter

          const fullPath = getFullPath(post.node.frontmatter)

          // Generate pages only for posts and projects
          createPage({
            path: fullPath,
            component: model === 'post' ? postTemplate : projectTemplate,
            context: {
              slug: fullPath,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  const { frontmatter } = node

  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type) && frontmatter) {
    const fullPath = getFullPath(frontmatter)
    createNodeField({
      name: 'slug',
      node,
      value: fullPath,
    })
  }
}
