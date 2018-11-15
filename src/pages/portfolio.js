import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'

import Item from '../components/PortfolioItem'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { pages } from '../utils'

class Portfolio extends React.Component {
	render() {
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location } active={ pages.portfolio }>
					<div className="Portfolio">
						<SEO
						  title="Portafolio"
						  url={`${siteUrl}/portfolio`}
						/>						
						<Header
							title='Portafolio'
							description={['Estos son algunos de mis proyectos, para ver más proyectos revisa mi ', <a target='__blank' href='https://github.com/dantehemerson'>Github</a>, '.']}
							bottom='40px'/>
						<div className="Page__content container--full">
							<div className="row center-xs start-md center-xl">
								{
									posts.map(( { node }, index) => {
										return (
											<div className="Portfolio__item col-xs-12 col-sm-12 col-md-6 col-xl-5" key={index}>
												<Item
													data={
														{
															title: node.frontmatter.title,
															subtitle: node.frontmatter.subtitle,
															thumbnail: node.fields.thumbnail.childImageSharp.sizes,
															excerpt: node.excerpt,
															date: node.frontmatter.date,
															path: `/${node.frontmatter.path}`,
															timeToRead: node.timeToRead,
															tags: node.frontmatter.tags,
															repository: node.frontmatter.repository,
															website: node.frontmatter.website
														}
													}
													mode="portfolio"/>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
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
    			excerpt
    			timeToRead
    			fields {
    				thumbnail {
    					childImageSharp {
    						sizes {
    							...GatsbyImageSharpSizes_tracedSVG
    						}
    					}
    				}
    			}
    			frontmatter {
    				date(formatString: "DD MMMM, YYYY")
    				title
    				subtitle
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
