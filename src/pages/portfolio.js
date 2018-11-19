import React from 'react'
import { graphql } from "gatsby"

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'
import List from '../components/Portfolio/ProjectsList'
import { pages } from '../utils'

class Portfolio extends React.Component {
	render() {
		const posts = this.props.data.allMarkdownRemark.edges || []
		const siteUrl = this.props.data.site.siteMetadata.siteUrl
		return (
      <Layout location={ this.props.location } active={ pages.portfolio }>
        <SEO
          title="Portafolio"
          url={`${siteUrl}/portfolio`}/>
        <Header
          title='Portafolio'
          description={['Estos son algunos de mis proyectos, para ver más proyectos revisa mi ', <a key='link' target='__blank' href='https://github.com/dantehemerson'>Github</a>, '.']}
          bottom='40px'/>
        <List posts={posts}/>
     </Layout>
		)
	}
}

export const queryPortfolio = graphql`
  query QueryPortfolio {
    site {
      siteMetadata {
         title
         siteUrl
      }
    }

    allMarkdownRemark(
    	sort: { fields: [frontmatter___date], order: DESC }
    	filter: { frontmatter: { model: { eq: "project"} }}
    ) {
    	edges {
    		node {
    			fields {
    				image {
    					childImageSharp {
    						sizes {
    							...GatsbyImageSharpSizes_tracedSVG
    						}
    					}
    				}
            slug
    			}
    			frontmatter {
    				title
    				path
    				thumbnail
    				tags
    				repository
    				website
    			}
    		}
    	}
    }
  }
`

export default Portfolio
