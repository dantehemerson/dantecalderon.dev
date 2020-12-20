import { graphql, StaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'
import AuthorPostFooter from '../components/AuthorPostFooter'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { pages } from '../utils'

const Template = props => {
  const [show_share, setShowShare] = useState(false)

  useEffect(() => {
    let body = document.documentElement
    const element = document.getElementById('Post_content')
    if (!element) return
    let contentY = element.offsetTop
    let height = element.clientHeight

    const scrollListenerShare = () => {
      let y = body.scrollTop - contentY + 110
      let show = y >= 0 && y - 0 <= height - 340
      if (show_share !== show) {
        setShowShare(show)
      }
    }

    window.addEventListener('scroll', scrollListenerShare)
  }, [show_share])

  const { isPost, title, image, description, path } = props
  const { siteUrl } = props.data.site.siteMetadata
  return (
    <Layout active={isPost ? pages.blog : pages.portfolio}>
      <SEO
        title={title}
        image={`${siteUrl}${image}`}
        url={`${siteUrl}/${path}`}
        description={description}
        isPost={isPost}
      />
      {props.children}
      <AuthorPostFooter avatar={props.data.avatar} make={!isPost} />
      <Disqus title={title} path={path} />
      {isPost && true /* Show sharer*/}
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => <Template data={data} {...props} />}
  />
)
