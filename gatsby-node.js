const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blogTemplate.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    date(formatString: "MMMM DD, YYYY")
                    description
                    thumbnail  
                    model
                  }
                }
              }
            }
          }
        `
      ).then(result => {
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
            component: blogPost,
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
      if(model === 'post') {
        if (thumbnail.indexOf('/img') === 0) {
          createNodeField({
            name: `thumbnail`,
            node,
            value: `.${thumbnail}`,
          })
        }        
      }
      else if(model === 'project') {
        createNodeField({
          name: 'thumbnail',
          node,
          value: `../posts${thumbnail}`,
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