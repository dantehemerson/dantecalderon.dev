import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Card from '../components/Card'
import SEO from '../components/SEO'


class Blog extends React.Component {

	render() {
		const { data } = this.props  		
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')	 

		return (
			<div className="Blog">
				<SEO
				  title="Blog"
				  url={`${siteUrl}/blog`}          
				/>
				<section className="HeaderBlog Page">
					<div className="container">
						<div className="row center-xs">
							<div className="HeaderBlog__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="HeaderBlog__title Page__title">Blog</h2>
								<p className="HeaderBlog__description Page__description">Sobre programacion y mas.</p>
							</div>							
						</div>
					</div>					
				</section>
				<div className="Page__content container--full">
					<div className="row center-xs">
						<div className="col-xs-12">
							{
								posts.map(({ node }) => {										
									return <Card 
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
												mode="blog" 
												key={ node.frontmatter.path }/>									
								})
							}
						</div>						
					</div>
				</div>
			</div>
		)
	}
}

export const queryBlog = graphql`
  query QueryBlog {      
  	image: imageSharp(id: {regex: "/about-image/"}) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    } 
    site {
      siteMetadata {
            title
            siteUrl
      }     
    }
    allMarkdownRemark(
    	sort: { fields: [frontmatter___date], order: DESC }
    	filter: { frontmatter: { model: { eq: "post"} }}
    ) {
    	edges {
    		node {
    			excerpt
    			timeToRead
    			fields {
    				thumbnail {
    					childImageSharp {
    						resolutions(width: 360, height: 230) {
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

export default Blog	
