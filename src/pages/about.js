import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import React from 'react'
import AllSocial from '../components/About/AllSocial'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Stack from '../components/Stack'
import { pages } from '../utils'
import Markdown from '../components/Markdown'

class About extends React.Component {
  render() {
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    const aboutContent = get(this.props.data, 'aboutContent')
    console.log(aboutContent)

    return (
      <Layout location={this.props.location} active={pages.about}>
        <div className="About">
          <SEO title="About" url={`${siteUrl}/about`} />
          <Header title="ABOUT" color="#3384a0" />
          <Markdown content={aboutContent.body} />

          <div className="container">
            <div className="row center-xs">
              <div className="About__interests">
                <h3 className="About__interests__title">Interests</h3>
                <ul className="About__interests__list">
                  <li className="About__interests__item">
                    <i className="ai" />
                    Artificial Intelligence
                  </li>
                  <li className="About__interests__item">
                    <i className="ml" />
                    Machine Learning
                  </li>
                  <li className="About__interests__item">
                    <i className="ds" />
                    Data Science
                  </li>
                  <li className="About__interests__item">
                    <i className="cp" />
                    Competitive Programming
                  </li>
                  <li className="About__interests__item">
                    <i className="game" />
                    Games Development
                  </li>
                  <li className="About__interests__item">
                    <i className="back" />
                    Backend Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Stack />
          <AllSocial />
        </div>
      </Layout>
    )
  }
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
    aboutImage: imageSharp(fluid: { originalName: { regex: "/about-image.jpg/" } }) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }

    aboutContent: mdx(fileAbsolutePath: { glob: "**/about.mdx" }, frontmatter: { model: { eq: "section" } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default About
