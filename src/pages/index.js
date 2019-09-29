import React from 'react'
import Header from '../components/Home/HeaderHome'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { pages } from '../utils'

const Index = props => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout location={props.location} active={pages.home}>
      <SEO title="" url={siteUrl} />
      <Header />
      <div
        style={{
          background: '#22292c',
          height: '200px',
        }}
      />
    </Layout>
  )
}

export default Index
