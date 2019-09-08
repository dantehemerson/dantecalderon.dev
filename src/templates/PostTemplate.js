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

export default class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props)
    const {
      timeToRead,
      body,
      fileAbsolutePath,
      fields: { slug },
      frontmatter: { title, image, date, description, tags }
    } = this.props.data.mdx

    return (
      <Layout isPost title={title} path={slug} image={`thumbnail`} description={description}>
        <PostHeader
          title={title}
          image={image}
          editLink={getLinkEditPost(fileAbsolutePath)}
          date={date}
          timeToRead={timeToRead}
          avatar={this.props.data.avatar}
        />
        <Markdown content={body} />
        <TagsSection tags={tags} />
        <Share title={title} path={slug} />
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
            sizes(maxWidth: 1920) {
              ...GatsbyImageSharpSizes_tracedSVG
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
