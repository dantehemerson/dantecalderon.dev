import React from 'react'
import Header from '../components/Home/HeaderHome'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import SEO from '../components/SEO'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { pages } from '../utils'

const Index = props => {
  const {
    siteMetadata: { siteUrl },
    aboutContent,
  } = useSiteMetadata()

  return (
    <Layout location={props.location} active={pages.home}>
      <SEO title="" url={siteUrl} />
      <Header />
      <Markdown content={aboutContent.body} />
    </Layout>
  )
}

export default Index
