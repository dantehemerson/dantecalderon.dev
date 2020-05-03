import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { pages, preferSpacedTag } from '../utils'
import Pagination from '../components/Pagination'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 1060px;
  margin: 0 auto 35px;
`

const BlogWithTags = props => {
  const tagSlug = get(props, 'pageContext.tagSlug')
  const tags = get(props, 'pageContext.tags')
  const title = `${preferSpacedTag(tags)} - Blog`
  const posts = props.data.allMdx.edges || []
  const siteUrl = props.data.site.siteMetadata.siteUrl
  return (
    <Layout location={props.location} active={pages.blog}>
      <div className="Blog">
        <SEO title={title} url={`${siteUrl}/blog/tags/${tagSlug}`} />
        <Header title={preferSpacedTag(tags)} color="#3fabbb" />
        <PostsWrapper>
          {posts.map(({ node }) => {
            if (node.frontmatter.published)
              return (
                <Card
                  data={{
                    title: node.frontmatter.title,
                    thumbnail: node.frontmatter.image.childImageSharp.sizes,
                    excerpt: node.excerpt,
                    date: node.frontmatter.date,
                    path: `/${node.fields.slug}`,
                    timeToRead: node.timeToRead,
                  }}
                  key={node.frontmatter.path}
                />
              )
            else return false
          })}
        </PostsWrapper>
      </div>
    </Layout>
  )
}

export const queryBlog = graphql`
  query QueryBlogList($tags: [String]) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tags }, model: { eq: "post" }, published: { eq: true } }
      }
      limit: 100
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
            image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            published
          }
        }
      }
    }
  }
`

export default BlogWithTags
