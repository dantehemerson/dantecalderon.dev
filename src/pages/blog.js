import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'

import Card from '../components/Card'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

class Blog extends React.Component {
	render() {
		const posts = get(this, 'props.data.allMarkdownRemark.edges') || []
		const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location }>
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
										{/*
										<p className="HeaderBlog__description Page__description">Sobre programacion y mas.</p>
										*/}
									</div>
								</div>
							</div>
						</section>
						<div className="Page__content container--blog">
							<div className="row center-xs start-md">
									{
										posts.map(({ node }) => {
											if (node.frontmatter.published)
												return (
													<div 
														style={{
															margin: '24px 0 0'
														}}
														key={node.frontmatter.path} 
														className="col-xs-12 col-sm-11 col-md-6 col-lg-6 col-xl-4">
														<Card
															data={
																{
																	title: node.frontmatter.title,
																	thumbnail: node.fields.thumbnail.childImageSharp.sizes,
																	excerpt: node.excerpt,
																	date: node.frontmatter.date,
																	path: `/${node.frontmatter.path}`,
																	timeToRead: node.timeToRead
																}
															}/>
													</div>
												)
											else return false

										})
									}								
							</div>
						</div>
					</div>
				</Layout>
		)
	}
}

export const queryBlog = graphql`
  	query QueryBlog {
   	site {
      	siteMetadata {
            title
            siteUrl
      	}
    	}
    	allMarkdownRemark(
    		sort: { fields: [frontmatter___date], order: DESC }
    		filter: { frontmatter: { model: { eq: "post"} }}) {
				edges {
					node {
						excerpt(pruneLength: 270)
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
						path
						thumbnail
						published
					}
				}
    		}
   	}
  }
`

export default Blog
