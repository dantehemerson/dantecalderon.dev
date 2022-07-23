const _ = require('lodash')
import { generateTagInfo, makeSlugForTag } from './src/helpers/tags.helpers'
const path = require('path')

function getFullPath(frontmatter): string {
  const pathPrefix = frontmatter.pathPrefix ?? ''
  const slug = frontmatter.slug ?? ''

  return path.join(pathPrefix, slug)
}

const getAllTagsInPages = (markdownPages = []) => {
  const items = _(markdownPages)
    .map(post => _.get(post, 'node.frontmatter.tags'))
    .flatten()
    .uniq()

  const groupedTags = items.groupBy(makeSlugForTag)

  return groupedTags
}

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve('./src/templates/ProjectTemplate.tsx')
  const postTemplate = path.resolve('./src/templates/PostTemplate.tsx')
  const blogListTemplate = path.resolve('./src/templates/BlogListTemplate.tsx')
  const tagsBlogListTemplate = path.resolve('./src/templates/TagsBlogListTemplate.tsx')

  const {
    data: { allProjects, allPosts },
  } = await graphql(`
    {
      allPosts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
        filter: {
          fileAbsolutePath: { ne: null }
          frontmatter: { published: { eq: true }, model: { eq: "post" } }
        }
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

      allProjects: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 100
        filter: {
          fileAbsolutePath: { ne: null }
          frontmatter: { published: { eq: true }, model: { eq: "project" } }
        }
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
  `)

  const postPerPage = 20

  const blogPostsPaginated = _.chunk(allPosts.edges, postPerPage)
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

  const groupedTags = getAllTagsInPages(allPosts.edges)

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

  const createMdxPages = mdxPages => {
    mdxPages.forEach((mdxPage, index) => {
      const previous = index === mdxPages.length - 1 ? null : mdxPages[index + 1].node
      const next = index === 0 ? null : mdxPages[index - 1].node

      const { model } = mdxPage.node.frontmatter

      const fullPath = getFullPath(mdxPage.node.frontmatter)

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
  }

  createMdxPages(allPosts.edges)
  // createMdxPages(allProjects.edges)
}

const counter = {}
export const onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
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
