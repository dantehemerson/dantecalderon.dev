import { graphql } from 'gatsby'
import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Sidebar from '../components/SidebarProject'
import Layout from './TemplateLayout'
import Markdown from '../components/Markdown'

export const Project = props => {
  return (
    <div>
      <ProjectHeader
        title={props.frontmatter.title}
        subtitle={props.frontmatter.subtitle}
        repository={props.frontmatter.repository}
        website={props.frontmatter.website}
        finished={props.frontmatter.finished}
        images={props.frontmatter.images}
        tags={props.frontmatter.tags}
      />
      <Markdown content={props.content} />
      <Sidebar
        tags={props.frontmatter.tags}
        stack={props.frontmatter.stack}
        roles={props.frontmatter.roles}
        website={props.frontmatter.website}
        repository={props.frontmatter.repository}
        client={props.frontmatter.client}
        licence={props.frontmatter.licence}
      />
    </div>
  )
}

const ProjectTemplate = props => {
  const post = props.data.mdx
  const { siteMetadata } = props.data.site
  const { title, description } = post.frontmatter

  return (
    <Layout title={title} path={post.fields.slug} image={`thumbnail`} description={description}>
      <Project
        {...post}
        {...siteMetadata}
        content={post.body}
        image={post.frontmatter.image.childImageSharp.sizes}
        avatar={props.data.avatar}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar2.jpeg/" } }) {
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
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
      }
    }
  }
`

export default ProjectTemplate
