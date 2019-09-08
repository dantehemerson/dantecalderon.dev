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

class BlogWithTags extends React.Component {
  render() {
    const tagSlug = get(this.props, 'pageContext.tagSlug')
    const tags = get(this.props, 'pageContext.tags')
    const title = `${preferSpacedTag(tags)} - Blog`
    console.log(this.props)
    const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    return (
      <Layout location={this.props.location} active={pages.blog}>
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
                      thumbnail: node.fields.image.childImageSharp.sizes,
                      excerpt: node.excerpt,
                      date: node.frontmatter.date,
                      path: `/${node.fields.slug}`,
                      timeToRead: node.timeToRead
                    }}
                    key={node.frontmatter.path}
                  />
                )
              else return false
            })}
            <Pagination
              limit={this.props.pageContext.limit}
              numPages={this.props.pageContext.numPages}
              currentPage={this.props.pageContext.currentPage}
            />
          </PostsWrapper>
        </div>
      </Layout>
    )
  }
}

export const queryBlog = graphql`
  query QueryBlogList($tags: [String]) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tags }, model: { eq: "post" }, published: { eq: true } } }
      limit: 100
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          timeToRead
          fields {
            image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            path
            thumbnail
            published
          }
        }
      }
    }
  }
`

export default BlogWithTags
