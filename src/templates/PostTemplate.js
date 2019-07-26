import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism.css'
import React from 'react'
import AuthorPost from '../components/AuthorPost'
import Content, { HTMLContent } from '../components/Content'
import SubscribeForm from '../components/SubscribeForm'
import { getLinkEditPost } from '../utils'
import Layout from './TemplateLayout'

export const Post = props => {
  const PostContent = props.contentComponent || Content
  return (
    <div className={`Post ${props.frontmatter.style}`}>
      <div className="Post__header">
        <div className="Post__header__data">
          <h1 className="Post__title">{props.frontmatter.title}</h1>
          {props.contentComponent && (
            <AuthorPost
              editLink={props.editLink}
              date={props.frontmatter.date}
              timeToRead={props.timeToRead ? props.timeToRead : '3'}
              avatar={props.avatar}
            />
          )}
        </div>
        {props.frontmatter.style !== 'default' && (
          <div className="Post__header__image">
            {props.contentComponent ? <Img sizes={props.image} /> : <img alt="" src={props.image} />}
          </div>
        )}
      </div>
      <PostContent content={props.content} className="container Post__content" />
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
          contentComponent={HTMLContent}
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
