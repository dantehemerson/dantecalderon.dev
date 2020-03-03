import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import SEO from '../components/SEO'
import { pages } from '../utils'

const About = props => {
  const siteUrl = get(props, 'data.site.siteMetadata.siteUrl')
  const aboutContent = get(props.data, 'aboutContent')

  return (
    <Layout location={props.location} active={pages.about}>
      <SEO title="About" url={`${siteUrl}/about`} />
      <Header title="ABOUT" color="#3384a0" />
      <Markdown content={aboutContent.body} />
    </Layout>
  )
}

export const queryAbout = graphql`
  query QueryAbout {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
    aboutContent: mdx(
      fileAbsolutePath: { glob: "**/about.mdx" }
      frontmatter: { model: { eq: "section" } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default About
