import { graphql } from 'gatsby'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import Markdown from '../components/Markdown'
import PostHeader from '../components/PostHeader'
import Share from '../components/Share'
import SubscribeForm from '../components/SubscribeForm'
import TagsSection from '../components/TagsSection'
import { getLinkEditPost } from '../utils'
import Layout from './TemplateLayout'

export const PostContent = ({ title, image, editLink, date, timeToRead, avatar, content }) => (
  <React.Fragment>
    <PostHeader
      title={title}
      image={image}
      editLink={editLink}
      date={date}
      timeToRead={timeToRead}
      avatar={avatar}
    />
    <Markdown content={content} />
  </React.Fragment>
)

const PostTemplate = props => {
  const {
    timeToRead,
    body,
    fileAbsolutePath,
    fields: { slug },
    frontmatter: { title, image, date, description, tags },
  } = props.data.mdx

  return (
    <Layout
      isPost
      title={title}
      path={slug}
      image={image.childImageSharp.fluid.src}
      description={description}
    >
      <PostContent
        title={title}
        image={image}
        editLink={getLinkEditPost(fileAbsolutePath)}
        date={date}
        timeToRead={timeToRead}
        avatar={props.data.avatar}
        content={body}
      />
      <TagsSection tags={tags} />
      <Share title={title} path={slug} />
      <SubscribeForm />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
      fluid(maxWidth: 720) {
        ...GatsbyImageSharpFluid_tracedSVG
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
      timeToRead
      fileAbsolutePath
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        model
        style
        tags
      }
      fields {
        slug
      }
    }
  }
`

export default PostTemplate
