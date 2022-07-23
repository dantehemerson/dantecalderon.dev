import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Card } from '../components/Card'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { TagsSection } from '../components/TagsSection'
import { pages, preferSpacedTag } from '../helpers'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 800px;
  margin: 0 auto 35px;
`

const BlogWithTags = props => {
  const tagSlug = props.pageContext.tagSlug
  const tagsPage = props.pageContext.tags
  const tags = props.data.allTag.edges || []
  const title = `${preferSpacedTag(tagsPage)} - Blog`
  const posts = props.data.allMdx.edges || []
  const siteUrl = props.data.site.siteMetadata.siteUrl

  return (
    <Layout location={props.location} active={pages.blog}>
      <div className="Blog" style={{ marginTop: 90 }}>
        <SEO title={title} url={`${siteUrl}/blog/tags/${tagSlug}`} />
        <TagsSection tags={tags} title="Popular Tags:" selectedSlug={tagSlug} />
        <PostsWrapper>
          {posts.map(({ node }) => {
            if (node.frontmatter.published)
              return (
                <Card
                  data={{
                    title: node.frontmatter.title,
                    thumbnail: node.frontmatter.image?.childImageSharp.gatsbyImageData,
                    externalThumbnail: node.frontmatter.externalImage,
                    excerpt: node.frontmatter.description || node.excerpt,
                    date: node.frontmatter.date,
                    tags: node.frontmatter.tags.slice(0, 4),
                    path: `/${node.fields.slug}`,
                  }}
                  key={node.frontmatter.slug}
                />
              )
            else return false
          })}
        </PostsWrapper>
      </div>
    </Layout>
  )
}

export const queryBlog = graphql`
  query QueryBlogList($tags: [String]) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allTag(limit: 12, sort: { fields: [postCount], order: DESC }) {
      edges {
        node {
          textColor
          slug
          title
          postCount
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tags }, model: { eq: "post" }, published: { eq: true } }
      }
      limit: 100
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            slug
            externalImage
            tags
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
            published
          }
        }
      }
    }
  }
`

export default BlogWithTags
