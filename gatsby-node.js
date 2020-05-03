const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { secureParseDate } = require('./src/utils/dates')

// CONSTANTS
const postPerPage = 8

const prefix = {
  post: 'blog/',
  project: 'portfolio/',
}

const isPostMarkdown = post => {
  return ['MarkdownRemark', 'Mdx'].includes(_.get(post, 'node.internal.type'))
}

const getPostCorrectDate = post => {
  if (isPostMarkdown(post)) {
    return secureParseDate(_.get(post, 'node.frontmatter.date'))
  } else {
    return secureParseDate(_.get(post, 'node.createdAt'))
  }
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
                  date
                  tags
                }
                internal {
                  type
                }
              }
            }
          }

          allNotionPageBlog(
            filter: { isDraft: { eq: false } }
            sort: { fields: [indexPage], order: DESC }
          ) {
            edges {
              node {
                slug
                pageId
                createdAt
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

        /** All posts from Notion and Mdx sorted by date */
        const allPostIdsSorted = [
          ...blogPosts,
          ..._.get(result.data, 'allNotionPageBlog.edges', []),
        ]
          .sort((postA, postB) => {
            let dateA = getPostCorrectDate(postA)
            let dateB = getPostCorrectDate(postB)

            if (dateA === dateB) {
              return 0
            } else {
              return dateA < dateB ? 1 : -1
            }
          })
          .map(post =>
            isPostMarkdown(post) ? _.get(post, 'node.frontmatter.path') : _.get(post, 'node.pageId')
          )

        const idsByPage = _.chunk(allPostIdsSorted, postPerPage)
        const numOfPages = idsByPage.length

        idsByPage.forEach((postIdsInPage, i) => {
          console.log('Dante: exports.createPages -> postIdsInPage', postIdsInPage)
          createPage({
            path: i === 0 ? '/blog' : `/blog/page/${i}`,
            component: blogListTemplate,
            context: {
              limit: postPerPage,
              skip: i * postPerPage,
              numPages: numOfPages,
              mdxIds: postIdsInPage,
              notionIds: postIdsInPage,
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
          createPage({
            path: `/blog/tags/${tagSlug}`,
            component: tagsBlogListTemplate,
            context: {
              tags,
              tagSlug,
            },
          })
        })

        // PROJECT ------------

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
