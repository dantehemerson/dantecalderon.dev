const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// CONSTANTS
const postPerPage = 8

const resolvePathImages = images => {
  return images.map(item => ({
    ...item,
    image: item.image ? `../../../static${item.image}` : undefined
  }))
}

const prefix = {
  post: 'blog/',
  project: 'portfolio/'
}

const getPrefix = model => {
  if (model && prefix[model]) {
    return prefix[model]
  }
  return ''
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('./src/templates/ProjectTemplate.js')
    const postTemplate = path.resolve('./src/templates/PostTemplate.js')
    const blogListTemplate = path.resolve('./src/templates/BlogListTemplate.js')

    resolve(
      graphql(`
        {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
              node {
                frontmatter {
                  model
                  path
                  published
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges

        const blogPosts = _.filter(result.data.allMarkdownRemark.edges, edge => {
          // The model is a blog post
          const model = _.get(edge, 'node.frontmatter.model')
          // Post is published
          const published = _.get(edge, 'node.frontmatter.published')
          if (model === 'post' && published) return edge
          return undefined
        })

        console.log(blogPosts)
        const numOfPages = Math.ceil(blogPosts.length / postPerPage)

        Array.from({
          length: numOfPages
        }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i + 1}`,
            component: blogListTemplate,
            context: {
              limit: postPerPage,
              skip: i * postPerPage,
              numPages: numOfPages,
              currentPage: i + 1
            }
          })
        })

        const makeSlugTag = tag => _.kebabCase(tag.toLowercase())
        // Create tags pages
        const tagGroups = _(blogPosts)
          .map(post => _.get(post, 'node.frontmatter.tags'))
          .filter()
          .flatten()
          .uniq()
          .groupBy(makeSlugTag)

        tagGroups.forEach((tags, tagsSlug) => {
          createPage({
            path: `/blog/tags/${tagsSlug}`,
            component: blogListTemplate,
            context: {
              tags
            }
          })
        })

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          const { model } = post.node.frontmatter
          const slug = `${getPrefix(model)}${post.node.frontmatter.path.trim()}`
          createPage({
            path: slug,
            component: model === 'post' ? postTemplate : projectTemplate,
            context: {
              slug,
              previous,
              next
            }
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const { frontmatter } = node

  if (node.internal.type === 'MarkdownRemark' && frontmatter) {
    const { thumbnail, model } = frontmatter
    if (thumbnail) {
      if (typeof thumbnail === 'string') {
        createNodeField({
          name: 'image',
          node,
          // Relative path from posts and projects folder. Linking to static/img folder.
          value: `../../../static${thumbnail}`
        })
      }
      createNodeField({
        name: 'slug',
        node,
        value: `${getPrefix(model)}${frontmatter.path}`
      })
      // Generate path to images for slider in project.
      if (model === 'project') {
        const images = resolvePathImages(frontmatter.images)
        createNodeField({
          name: 'images',
          node,
          value: images
        })
      }
    }
  }
}
