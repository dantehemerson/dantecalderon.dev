import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import TagsSection from '../components/TagsSection'
import { pages } from '../utils'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 800px;
  margin: 0 auto 35px;
`

function Blog(props) {
  const posts = props.data.allMdx.edges || []
  const tags = props.data.allTag.edges || []
  const siteUrl = props.data.site.siteMetadata.siteUrl

  const { currentPage, numPages, hasNextPage, hasPrevPage } = props.pageContext

  return (
    <Layout location={props.location} active={pages.blog}>
      <div className="Blog" style={{ marginTop: 90 }}>
        <SEO title="Blog" url={`${siteUrl}/blog`} />
        <TagsSection tags={tags} title="Popular Tags:" />
        <PostsWrapper>
          {posts.map(({ node }, index) => {
            if (node.frontmatter.published)
              return (
                <Card
                  data={{
                    title: node.frontmatter.title,
                    thumbnail: node.frontmatter.image?.childImageSharp?.gatsbyImageData,
                    externalThumbnail: node.frontmatter.externalImage,
                    excerpt: node.frontmatter.description || node.excerpt,
                    date: node.frontmatter.date,
                    tags: node.frontmatter.tags,
                    path: `/${node.fields.slug}`,
                  }}
                  key={index}
                />
              )
            else return false
          })}
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
  query QueryTagBlogList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allTag(limit: 12, sort: { fields: [postCount], order: DESC }) {
      edges {
        node {
          textColor
          slug
          title
          postCount
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { eq: "post" }, published: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            slug
            externalImage
            published
            tags
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
