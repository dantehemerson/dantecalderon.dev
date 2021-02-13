import { graphql, Link, useStaticQuery } from 'gatsby'
import { get } from 'lodash'
import React from 'react'

export default function LatestPosts() {
  const posts = get(
    useStaticQuery<{ abs: number }>(graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { model: { eq: "post" }, published: { eq: true } } }
          limit: 3
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
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
    <div>
      <p className="md-p">
        <strong>📖 Latest Posts:</strong>
      </p>
      <ul>
        {posts.map(({ node: post }, index) => {
          return (
            <li id={index}>
              <p className="md-p">
                <Link to={`/${post.fields.slug}`}>{post.frontmatter.title}</Link>
              </p>
            </li>
          )
        })}
        <li id="more">
          <p className="md-p">
            <Link to="/blog">more...</Link>
          </p>
        </li>
      </ul>
    </div>
  )
}

//   <Header>
//     <h2>Latest Posts:</h2>
//     <Link className="all" to="/blog">
//       See all ➤
//     </Link>
//   </Header>
//   <Container>
//   <LatestPostsItem
//   key={index}
//   post={{
//     title: post.frontmatter.title,
//     fluidImg: post.frontmatter.image.childImageSharp.fluid,
//     path: `/${post.fields.slug}`,
//   }}
// />
//   </Container>
// </div>
