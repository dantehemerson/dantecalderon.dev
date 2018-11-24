import React from 'react'
import { graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import Toolbar from '../components/ProjectToolbar'
import Sidebar from '../components/SidebarProject'
import Tags from '../components/Tags'
import Slider from '../components/Slider'

import Layout from './TemplateLayout'
import Message from '../components/Message'

export const Project = props => {
  const PostContent = props.contentComponent || Content
  return (
    <div className="Post ProjectTemplate">
          <div className="Post__header ProjectTemplate__header">
            <div className="Post__header__data">
              <h1 className="Post__title">{`${props.frontmatter.title}`}</h1>
              <h2 className="Post__subtitle">{ props.frontmatter.subtitle }</h2>
              <Toolbar
                repository={ props.frontmatter.repository }
                website={ props.frontmatter.website }
              />
              { !props.frontmatter.finished &&
                <Message title='Project in progress...'>This project is not finished yet, I'm working on it.</Message> }
            </div>
          </div>
          <div style={{
            paddingLeft: '10px',
            paddingRight: '10px'
          }}>
            <Slider finished={props.frontmatter.finished} images={props.fields.images} />
          </div>
          <div>
            <Tags items={ props.frontmatter.tags }/>
          </div>
          <div className="row ProjectTemplate__contentwrapper">
            <div className="col-xs-12 col-lg-9 ProjectTemplate__col">
              <hr className="ProjectTemplate__header-separator"/>
              <PostContent content={ props.content } className="container Post__content ProjectTemplate__content"/>
            </div>
            <div className="col-xs-12 col-lg-3">
              <Sidebar
                tags={ props.frontmatter.tags }
                stack={ props.frontmatter.stack }
                roles={ props.frontmatter.roles }
                website={ props.frontmatter.website }
                repository={ props.frontmatter.repository }
                client={ props.frontmatter.client }
                licence={ props.frontmatter.licence }
              />
            </div>
          </div>
        </div>
  )
}

export default class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { siteMetadata } = this.props.data.site
    const { title, thumbnail, description } = post.frontmatter
    return (
      <Layout
        title={title}
        path={post.fields.slug}
        image={thumbnail}
        description={description}>
        <Project
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
  query BlogPostBySlug($slug: String!) {
    avatar: imageSharp(fluid: {originalName: { regex: "/avatar2.jpeg/" } }) {
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
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
        model
        tags
        stack
        roles
        client
        repository
        website
        licence
        finished
      }
      fields {
        slug
        image {
          childImageSharp {
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
        images {
          description
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
  }
`
