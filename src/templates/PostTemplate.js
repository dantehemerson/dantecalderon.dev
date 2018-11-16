import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import AuthorPost from '../components/AuthorPost'

import Layout from './TemplateLayout'
import 'prismjs/themes/prism.css'

export const Post = (props) => {
  const PostContent = props.contentComponent || Content
  return (
    <div className={`Post ${ props.frontmatter.style }`}>
      <div className="Post__header">
        <div className="Post__header__data">
          <h1 className="Post__title">{ props.frontmatter.title }</h1>
          {
            props.contentComponent &&
            <AuthorPost
              date={ props.frontmatter.date }
              timeToRead={props.timeToRead ? props.timeToRead : '3'}
              avatar={props.avatar}/>
          }
        </div>
        {
          props.frontmatter.style !== 'default' &&
          <div className="Post__header__image">
            {
              props.contentComponent ?
              <Img sizes={ props.image }/>
              : <img src={ props.image }/>
            }
          </div>
        }
      </div>
      <PostContent content={props.content} className="container Post__content"/>
    </div>
  )
}

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { siteMetadata } = this.props.data.site
    return (
      <Layout isPost >
        <Post
          { ...post }
          { ...siteMetadata }
          content={ post.html }
          contentComponent={ HTMLContent }
          image={ post.fields.image.childImageSharp.sizes }
          avatar={ this.props.data.avatar }/>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    avatar: imageSharp(fluid: {originalName: { regex: "/avatar.jpg/" } }) {
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
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      id
      html
      htmlAst
      timeToRead
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
        path
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
      }
    }
  }
`
