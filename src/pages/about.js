import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import React from 'react'
import AllSocial from '../components/About/AllSocial'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactSocial from '../components/ContactSocial'
import Stack from '../components/Stack'
import { pages } from '../utils'

class About extends React.Component {
  render() {
    const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
    return (
      <Layout location={this.props.location} active={pages.about}>
        <div className="About">
          <SEO title="About" url={`${siteUrl}/about`} />
          <Header title="ABOUT" color="#3384a0" />
          <div
            className="Post"
            style={{
              paddingTop: '20px'
            }}
          >
            <div className="container Post__content">
              <p>Hi, my name is Dante Calderon.</p>
              <p>
                First of all, thanks for visiting my blog. If you have any questions, you want to work with me or you
                want to leave me some words. I would love to hear you.
              </p>
              <p>
                You can send me an email to <a href="mailto:mail@dantecalderon.dev">mail@dantecalderon.dev</a> or
                contact me for:
              </p>
            </div>
          </div>
          <ContactSocial />
          <div className="container">
            <div className="row center-xs">
              <div className="About__img-container">
                <div
                  style={{
                    maxWidth: '400px',
                    margin: '0 auto',
                    border: '5px solid #3384a0'
                  }}
                >
                  <Img sizes={this.props.data.aboutImage.sizes} />
                </div>
              </div>
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
  }
`

export default About
