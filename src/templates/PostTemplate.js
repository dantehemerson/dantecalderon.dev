import { graphql } from 'gatsby'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import Markdown from '../components/Markdown'
import PostHeader from '../components/PostHeader'
import SubscribeForm from '../components/SubscribeForm'
import { getLinkEditPost } from '../utils'
import Layout from './TemplateLayout'

export const Post = props => {
  return (
    <div>
      <PostHeader
        title={props.frontmatter.title}
        image={props.image}
        editLink={props.editLink}
        date={props.frontmatter.date}
        timeToRead={props.timeToRead ? props.timeToRead : '3'}
        avatar={props.avatar}
      />
      <Markdown content={props.content} />
    </div>
  )
}

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { siteMetadata } = this.props.data.site
    const { title, thumbnail, description } = post.frontmatter
    return (
      <Layout isPost title={title} path={post.fields.slug} image={thumbnail} description={description}>
        <Post
          {...post}
          {...siteMetadata}
          content={post.html}
          image={post.fields.image.childImageSharp.sizes}
          editLink={getLinkEditPost(post.fileAbsolutePath)}
          avatar={this.props.data.avatar}
        />
        <SubscribeForm />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
      sizes(maxWidth: 720) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      timeToRead
      fileAbsolutePath
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
        model
        style
        tags
      }
      fields {
        image {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        slug
      }
    }
  }
`
