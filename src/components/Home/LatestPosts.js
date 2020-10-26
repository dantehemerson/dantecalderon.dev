import { graphql, Link, useStaticQuery } from 'gatsby'
import { media } from '../../styles'
import styled from 'styled-components'
import { get } from 'lodash'
import React from 'react'
import { LatestPostsItem } from './LatestPostsItem'

export const LatestPosts = () => {
  const posts = get(
    useStaticQuery(graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { model: { eq: "post" }, published: { eq: true } } }
          limit: 3
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
                slug
                image {
                  childImageSharp {
                    sizes {
                      ...GatsbyImageSharpSizes_tracedSVG
                    }
                  }
                }
                published
              }
            }
          }
        }
      }
    `),
    'allMdx.edges',
    []
  )

  return (
    <div
      style={{
        background: '#fafafa',
        padding: '35px 12px 25px',
      }}
    >
      <Header>
        <h2>Latest Posts:</h2>
        <Link className="all" to="/blog">
          See all ➤
        </Link>
      </Header>
      <Container wrap="wrap" maxWidth="1100px">
        {posts.map(({ node }) => {
          return (
            <LatestPostsItem
              post={{
                title: node.frontmatter.title,
                thumbnail: node.frontmatter.image.childImageSharp.sizes,
                excerpt: node.excerpt,
                date: node.frontmatter.date,
                path: `/${node.fields.slug}`,
              }}
            >
              hola
            </LatestPostsItem>
          )
        })}
      </Container>
    </div>
  )
}

const Header = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
    text-decoration: underline;
  }

  .all {
    color: #4c91e2;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }
`
const Container = styled.div`
  max-width: 1080px;
  display: grid;
  grid-gap: 10px;
  margin: 0 auto;
  ${media.sm`
    grid-template-columns: 1fr 1fr;
  `};
  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`
