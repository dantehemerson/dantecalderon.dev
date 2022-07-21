import { graphql } from 'gatsby'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import Markdown from '../components/Markdown'
import PostHeader from '../components/PostHeader'
import Share from '../components/Share'
import TagsSection from '../components/TagsSection'
import { generateTagInfo } from '../utils/generate-tag-info.helper'
import Layout from './TemplateLayout'

export const PostContent = ({ title, image, externalImage, date, timeToRead, avatar, content }) => (
  <React.Fragment>
    <PostHeader
      title={title}
      image={image}
      externalImage={externalImage}
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
    fields: { slug },
    frontmatter: { title, image, externalImage, date, description, tags },
  } = props.data.mdx

  return (
    <Layout
      isPost
      title={title}
      path={slug}
      image={image?.childImageSharp.gatsbyImageData}
      externalImage={externalImage}
      description={description}
    >
      <PostContent
        title={title}
        image={image?.childImageSharp.gatsbyImageData}
        externalImage={externalImage}
        date={date}
        timeToRead={timeToRead}
        avatar={props.data.avatar.gatsbyImageData}
        content={body}
      />
      <TagsSection tags={tags.map(tag => ({ node: generateTagInfo(tag)}) )} />
      <Share title={title} path={slug} />
      {/* <SubscribeForm /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
      gatsbyImageData(layout: CONSTRAINED, width: 720, placeholder: TRACED_SVG)
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
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        externalImage
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 1920, placeholder: TRACED_SVG)
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
