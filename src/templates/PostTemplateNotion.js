import { graphql } from 'gatsby'
import notionRendererFactory from 'gatsby-source-notionso-dante-version/lib/renderer'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import Markdown from '../components/Markdown'
import PostHeader from '../components/PostHeader'
import Share from '../components/Share'
import SubscribeForm from '../components/SubscribeForm'
import _ from 'lodash'
import TagsSection from '../components/TagsSection'
import Layout from './TemplateLayout'
import NotionBlockRenderer from '../components/renderers/notionBlockRenderer'

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

const PostTemplateNotion = ({ data }) => {
  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageBlog,
  })

  const { title, slug, excerpt: description } = _.get(data, 'notionPageBlog', {})

  return (
    <Layout
      isPost
      title={title}
      path={slug}
      // image={image.childImageSharp.sizes.src}
      description={description}
    >
      <NotionBlockRenderer data={data} renderer={notionRenderer} debug={false} />
      {/* <TagsSection tags={tags} /> */}
      {/* <Share title={title} path={slug} /> */}
      <SubscribeForm />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($pageId: String!) {
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
    notionPageBlog(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      # imageNodes {
      #   imageUrl
      #   localFile {
      #     publicURL
      #   }
      # }
      pageId
      slug
      title
      isDraft
      id
      indexPage
    }
  }
`

export default PostTemplateNotion
