import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Card from '../components/Card'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { pages } from '../utils'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 1060px;
  margin: 0 auto 35px;
`

class Blog extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    return (
        <Layout location={ this.props.location } active={ pages.blog }>
          <div className="Blog">
            <SEO
              title="Blog"
              url={`${siteUrl}/blog`}
            />
            <Header
              title='Blog'
              color='#3fabbb'/>
            <PostsWrapper>
              {
                posts.map(({ node }) => {
                  if (node.frontmatter.published)
                    return (
                      <Card
                        data={
                          {
                            title: node.frontmatter.title,
                            thumbnail: node.fields.image.childImageSharp.sizes,
                            excerpt: node.excerpt,
                            date: node.frontmatter.date,
                            path: `/${node.fields.slug}`,
                            timeToRead: node.timeToRead
                          }
                        }
                        finished={node.frontmatter.finished}
                        key={node.frontmatter.path}/>
                    )
                  else return false
                })
              }
            </PostsWrapper>
          </div>
        </Layout>
    )
  }
}

export const queryBlog = graphql`
  query QueryBlog {
  site {
      siteMetadata {
          title
          siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { eq: "post"} }}) {
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
            finished
          }
        }
      }
    }
  }
`

export default Blog
