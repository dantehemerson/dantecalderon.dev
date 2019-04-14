import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Home/HeaderHome'
import { pages } from '../utils'

class Index extends React.Component {
  render() {
    const { siteUrl } = this.props.data.site.siteMetadata
    return (
      <Layout location={this.props.location} active={pages.home}>
        <SEO title="" url={siteUrl} />
        <Header />
      </Layout>
    )
  }
}

export const queryBlog = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Index
