import { graphql } from 'gatsby'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import List from '../components/Portfolio/ProjectsList'
import SEO from '../components/SEO'
import { pages } from '../utils'

const Portfolio = props => {
  const posts = props.data.allMdx.edges || []
  console.log('Dante: posts', posts)
  const siteUrl = props.data.site.siteMetadata.siteUrl

  return (
    <Layout location={props.location} active={pages.portfolio}>
      <SEO title="Portfolio" url={`${siteUrl}/portfolio`} />
      <Header
        title="Portfolio"
        description={[
          'These are some of my projects, to see more projects check my ',
          <a key="link" target="__blank" href="https://github.com/dantehemerson">
            Github
          </a>,
          '.',
        ]}
        bottom="40px"
      />
      <List posts={posts} />
    </Layout>
  )
}

export const queryPortfolio = graphql`
  query QueryPortfolio {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }

    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            path
            image {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
            tags
            date
            repository
            website
            finished
          }
        }
      }
    }
  }
`

export default Portfolio
