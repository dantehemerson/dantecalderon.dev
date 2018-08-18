import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Card from '../components/Card'
import SEO from '../components/SEO'

class Portfolio extends React.Component {
	render() {
		const { data } = this.props  		
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')	

		return (
			<div className="Portfolio">
				<SEO
				  title="Portafolio"
				  url={`${siteUrl}/portfolio`}          
				/>
				<section className="HeaderPortfolio Page">
					<div className="container">
						<div className="row center-xs">
							<div className="HeaderPortfolio__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="HeaderPortfolio__title Page__title">Portfolio</h2>
								<p className="HeaderPortfolio__description Page__description">Un poco de mi trabajo</p>
							</div>							
						</div>
					</div>					
				</section>
				<div className="Page__content container--full">
					<div className="row center-xs start-md">
						{
							posts.map(( { node }, index) => {								
								return (
									<div className="col-xs-12 col-sm-12 col-md-6" key={index}>
										<Card 
											data={
												{
													title: node.frontmatter.title,
													thumbnail: node.fields.thumbnail.childImageSharp.resolutions,
													excerpt: node.excerpt,
													date: node.frontmatter.date,
													path: `/${node.frontmatter.path}`,
													timeToRead: node.timeToRead
												}
											} 
											mode="portfolio"											
											/>
									</div>
								)
							})
						}					
					</div>
				</div>
			</div>
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
    						resolutions(width: 720, height: 460) {
    							...GatsbyImageSharpResolutions_withWebp
    						}
    					}
    				}
    			}
    			frontmatter {
    				date(formatString: "DD MMMM, YYYY")
    				title
    				path 
    				thumbnail   			
    			}
    		}
    	}
    }
  }
`

export default Portfolio	
