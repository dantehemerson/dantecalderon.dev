import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import AuthorPostFooter from '../components/AuthorPostFooter'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { pages } from '../utils'

class Template extends React.Component {
  state = {
    show_share: false
  }

  componentDidMount() {
    let body = document.documentElement
    const element = document.getElementById('Post_content')
    if (!element) return
    let contentY = element.offsetTop
    let height = element.clientHeight

    const scrollListenerShare = () => {
      let y = body.scrollTop - contentY + 110
      let show = y >= 0 && y - 0 <= height - 340

      if (this.state.show_share !== show) {
        this.setState({ show_share: show })
      }
    }

    window.addEventListener('scroll', scrollListenerShare)
  }

  render() {
    const { isPost, title, image, description, path } = this.props
    const { siteUrl } = this.props.data.site.siteMetadata
    return (
      <Layout active={isPost ? pages.blog : pages.portfolio}>
        <SEO
          title={title}
          image={`${siteUrl}${image}`}
          url={`${siteUrl}/${path}`}
          description={description}
          isPost={isPost}
        />
        {this.props.children}
        <AuthorPostFooter avatar={this.props.data.avatar} make={!isPost} />
        <Disqus title={title} path={path} />
        {isPost && true /* Show sharer*/}
      </Layout>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
          sizes(maxWidth: 180) {
            ...GatsbyImageSharpSizes_tracedSVG
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
