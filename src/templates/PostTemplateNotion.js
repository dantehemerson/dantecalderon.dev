import { graphql } from 'gatsby'
import notionRendererFactory from 'gatsby-source-notionso-dante-version/lib/renderer'
import _ from 'lodash'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import styled from 'styled-components'
import NotionBlockRenderer from '../components/renderers/notionBlockRenderer'
import SubscribeForm from '../components/SubscribeForm'
import Layout from './TemplateLayout'

export const PostContent = ({ data }) => {
  const notionRenderer = notionRendererFactory({
    notionPage: data.notionPageBlog,
  })
  return (
    <PostContentNotionContainer>
      {/* <PostHeader
      title={title}
      image={image}
      editLink={editLink}
      date={date}
      timeToRead={timeToRead}
      avatar={avatar}
    /> */}
      <NotionBlockRenderer data={data} renderer={notionRenderer} debug={false} />
    </PostContentNotionContainer>
  )
}

const PostTemplateNotion = ({ data }) => {
  const { title, slug, excerpt: description } = _.get(data, 'notionPageBlog', {})

  return (
    <Layout
      isPost
      title={title}
      path={slug}
      // image={image.childImageSharp.sizes.src}
      description={description}
    >
      <PostContent data={data} />
      {/* <TagsSection tags={tags} /> */}
      {/* <Share title={title} path={slug} /> */}
      <SubscribeForm />
    </Layout>
  )
}

const PostContentNotionContainer = styled.div`
  margin-top: 60px;
`

export const pageQueryNotion = graphql`
  query PostQueryNotion($pageId: String!) {
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
      imageNodes {
        imageUrl
        localFile {
          publicURL
        }
      }
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
