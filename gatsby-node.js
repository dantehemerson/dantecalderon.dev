const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

// CONSTANTS
const postPerPage = 8

const prefix = {
  post: 'blog/',
  project: 'portfolio/',
}

const getPrefix = model => {
  return prefix[model] ? prefix[model] : ''
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('./src/templates/ProjectTemplate.js')
    const postTemplate = path.resolve('./src/templates/PostTemplate.js')
    const blogListTemplate = path.resolve('./src/templates/BlogListTemplate.js')
    const tagsBlogListTemplate = path.resolve('./src/templates/TagsBlogListTemplate.js')

    resolve(
      graphql(`
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
            filter: { fileAbsolutePath: { ne: null } }
          ) {
            edges {
              node {
                frontmatter {
                  model
                  path
                  published
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

        const posts = _.filter(result.data.allMdx.edges, edge => {
          const model = _.get(edge, 'node.frontmatter.model')
          if (model && ['post', 'project'].includes(model)) return edge
          return undefined
        })

        const blogPosts = _.filter(posts, edge => {
          // The model is a blog post
          const model = _.get(edge, 'node.frontmatter.model')
          // Post is published
          const published = _.get(edge, 'node.frontmatter.published')
          if (model === 'post' && published) return edge
          return undefined
        })

        const numOfPages = Math.ceil(blogPosts.length / postPerPage)

        Array.from({
          length: numOfPages,
        }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i}`,
            component: blogListTemplate,
            context: {
              limit: postPerPage,
              skip: i * postPerPage,
              numPages: numOfPages,
              currentPage: i,
              hasPrevPage: i > 0,
              hasNextPage: i < numOfPages - 1,
            },
          })
        })

        const makeSlugTag = tag => _.kebabCase(tag.toLowerCase())
        // Create tags pages

        const tagGroups = _(blogPosts)
          .map(post => _.get(post, 'node.frontmatter.tags'))
          .filter()
          .flatten()
          .uniq()
          .groupBy(makeSlugTag)

        tagGroups.forEach((tags, tagSlug) => {
          console.log(`Creando tag para ${tagSlug}`)
          createPage({
            path: `/blog/tags/${tagSlug}`,
            component: tagsBlogListTemplate,
            context: {
              tags,
              tagSlug,
            },
          })
        })

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          const { model } = post.node.frontmatter
          const slug = `${getPrefix(model)}${post.node.frontmatter.path.trim()}`

          // Generate pages only for posts and projects
          createPage({
            path: slug,
            component: model === 'post' ? postTemplate : projectTemplate,
            context: {
              slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const { frontmatter } = node

  if (['MarkdownRemark', 'Mdx'].includes(node.internal.type) && frontmatter) {
    const { model } = frontmatter
    createNodeField({
      name: 'slug',
      node,
      value: `${getPrefix(model)}${frontmatter.path}`,
    })
  }
}
