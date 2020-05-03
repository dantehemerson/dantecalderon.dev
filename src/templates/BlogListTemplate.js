import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { pages } from '../utils'
import _ from 'lodash'
import dayjs from 'dayjs'
import { secureParseDate } from '../utils/dates'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 1060px;
  margin: 0 auto 35px;
`

const Blog = props => {
  const posts = props.data.allMdx.edges || []
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const notionPosts = _.get(props.data, 'allNotionPageBlog.edges', [])
  console.log('Dante: notionPosts', notionPosts)

  const { currentPage, numPages, hasNextPage, hasPrevPage } = props.pageContext
  return (
    <Layout location={props.location} active={pages.blog}>
      <div className="Blog">
        <SEO title="Blog" url={`${siteUrl}/blog`} />
        <Header title="Blog" color="#3fabbb" />
        <PostsWrapper>
          {notionPosts.map(({ node }) => (
            <Card
              data={{
                title: node.title,
                imageUrl: node.pageCover,
                excerpt: node.excerpt,
                date: dayjs(secureParseDate(node.createdAt).toISOString()).format('MMMM DD, YYYY'),
                path: `/${node.slug}`,
                timeToRead: '~3m',
              }}
              key={node.pageId}
            />
          ))}
          {posts.map(({ node }, index) => (
            <Card
              data={{
                title: node.frontmatter.title,
                thumbnail: node.frontmatter.image.childImageSharp.sizes,
                excerpt: node.excerpt,
                date: node.frontmatter.date,
                path: `/${node.fields.slug}`,
                timeToRead: node.timeToRead,
              }}
              key={index}
            />
          ))}
          <Pagination
            pages={numPages}
            selected={currentPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </PostsWrapper>
      </div>
    </Layout>
  )
}

export const queryBlog = graphql`
  query QueryTagBlogList($mdxIds: [String], $notionIds: [String]) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allNotionPageBlog(
      filter: { pageId: { in: $notionIds } }
      sort: { fields: [indexPage], order: DESC }
    ) {
      edges {
        node {
          pageId
          title
          slug
          createdAt
          excerpt
          pageIcon
          pageCover
        }
      }
    }

    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { path: { in: $mdxIds }, published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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

export default Blog
