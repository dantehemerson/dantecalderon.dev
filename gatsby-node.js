const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const tags = require('./content/tags.json')
const { kebabCase } = require('lodash')

const postPerPage = 20

function generateTagInfo(tagPlain) {
  const tagSlug = kebabCase(tagPlain.toLowerCase())
  return {
    title: tagPlain,
    slug: tagSlug,
    color: '#dcdcdc',
    textColor: '#6a6a6a',
    ...tags[tagSlug],
  }
}

const getFullPath = frontmatter => {
  const pathPrefix = _.get(frontmatter, 'pathPrefix') || ''
  const slug = _.get(frontmatter, 'slug') || ''
  return path.join(pathPrefix, slug)
}

const getAllTagsInPages = (markdownPages = []) => {
  const makeSlugTag = tag =>
    _.get(tags[_.kebabCase(tag.toLowerCase())], 'slug') || _.kebabCase(tag.toLowerCase())

  const items = _(markdownPages)
    .map(post => _.get(post, 'node.frontmatter.tags'))
    .flatten()
    .uniq()

  const groupedTags = items.groupBy(makeSlugTag)

  return {
    existentTags: items.map(tagName => generateTagInfo(tagName)),
    groupedTags,
  }
}

exports.createPages = ({ graphql, actions, createNodeId, createContentDigest }) => {
  const { createPage, createNode } = actions
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

        const { groupedTags } = getAllTagsInPages(blogPosts)
        groupedTags.forEach((tags, tagSlug) => {
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

const counter = {}
exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
  const { createNodeField, createNode } = actions
  const { frontmatter } = node

  const TAG_NODE_TYPE = `Tag`

  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type) && frontmatter) {
    const fullPath = getFullPath(frontmatter)
    createNodeField({
      node,
      name: 'slug',
      value: fullPath,
    })

    if (frontmatter.tags && frontmatter.published && frontmatter.model === 'post') {
      frontmatter.tags.forEach(tag => {
        const tagInfo = generateTagInfo(tag)

        if (counter[tagInfo.slug] === undefined) {
          counter[tagInfo.slug] = 1
        } else {
          counter[tagInfo.slug]++
        }
        tagInfo.postCount = counter[tagInfo.slug]

        createNode({
          ...tagInfo,
          id: createNodeId(`${TAG_NODE_TYPE}-${tagInfo.slug}`),
          parent: null,
          children: [],
          internal: {
            type: TAG_NODE_TYPE,
            content: JSON.stringify(tagInfo),
            contentDigest: createContentDigest(tagInfo),
          },
        })
      })
    }
  }
}
