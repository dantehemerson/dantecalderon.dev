const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const resolvePathImages = (images) => {
  return images.map(item => ({
      ...item,
      image: item.image ? `../../../static${item.image}` : undefined
  }))
}

exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
      const projectTemplate = path.resolve('./src/templates/ProjectTemplate.js')
      const postTemplate = path.resolve('./src/templates/PostTemplate.js')
      resolve(
         graphql(`
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    model
                    path
                    thumbnail
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

            _.each(posts, (post, index) => {
               const previous =
                  index === posts.length - 1 ? null : posts[index + 1].node
               const next = index === 0 ? null : posts[index - 1].node

               createPage({
                  path: post.node.frontmatter.path.trim(),
                  component: post.node.frontmatter.model === 'post' ? postTemplate : projectTemplate,
                  context: {
                     slug: post.node.frontmatter.path,
                     previous,
                     next,
                  },
               })
            })
         })
      )
   })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
   const { createNodeField } = boundActionCreators
   const { frontmatter } = node

   if (frontmatter) {
      const { thumbnail, model } = frontmatter
      if (thumbnail) {
        if (typeof thumbnail === 'string') {
          createNodeField({
            name: 'image',
            node,
            // Relative path from posts and projects folder. Linking to static/img folder.
            value: `../../../static${thumbnail}`,
          })
        }
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
   if (node.internal.type === `MarkdownRemark`) {
      createNodeField({
         name: `slug`,
         node,
         value: `/${frontmatter.path}`,
      })
   }
}
