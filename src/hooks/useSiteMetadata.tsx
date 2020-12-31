import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          social {
            title
            icon
            link
          }
          socials {
            github
            twitter
            linkedin
            instagram
          }
          disqusShortname
          siteUrl
        }
      }
      aboutContent: mdx(
        fileAbsolutePath: { glob: "**/about.mdx" }
        frontmatter: { model: { eq: "section" } }
      ) {
        frontmatter {
          title
        }
        body
      }
    }
  `)

  return {
    siteMetadata: data.site.siteMetadata,
    aboutContent: data.aboutContent,
  }
}

export default useSiteMetadata
