import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import get from 'lodash/get'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Stack from '../components/Stack'
import Header from '../components/Header'
import { pages } from '../utils'

class About extends React.Component {
	render() {
   	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location } active={ pages.about }>
					<div className="About">
						<SEO
						  title="About"
						  url={`${siteUrl}/about`}
						/>
						<Header
							title='ABOUT'
							description="Hi, I'm Dante Calderón, web developer. I like to build things with Nodejs and I work with React, Redux, Gatsby, Nextjs and the entire React ecosystem."
							color='#3384a0'/>
						<div className="container">
							<div className="row center-xs">
									<div className="About__img-container col-xs-12 col-md-6">
										<div className="About__img">
											<Img sizes={ this.props.data.aboutImage.sizes } />
										</div>
									</div>
									<div className="About__interests col-xs-12 col-md-6 text-left first-md">
										<h3 className="About__interests__title">Interests</h3>
										<ul className="About__interests__list">
											<li className="About__interests__item" >
												<i className="ai"></i>Artificial Intelligence
											</li>
											<li className="About__interests__item" >
												<i className="ml"></i>Machine Learning
											</li>
											<li className="About__interests__item" >
												<i className="ds"></i>Data Science
											</li>
											<li className="About__interests__item" >
												<i className="cp"></i>Competitive Programming
											</li>
											<li className="About__interests__item" >
												<i className="game"></i>Games Development
											</li>
											<li className="About__interests__item" >
												<i className="back"></i>Backend Development
												</li>
										</ul>
								</div>
							</div>
						</div>
						<Stack/>
					</div>
				</Layout>
		)
	}
}

export const queryAbout = graphql`
  query QueryAbout {
   	site {
     	siteMetadata {
       	title
      	siteUrl
     	}
   	}
   	aboutImage: imageSharp(fluid: {originalName: { regex: "/about-image.jpg/" } }) {
   	   sizes(maxWidth: 960) {
   	      ...GatsbyImageSharpSizes_tracedSVG
   	   }
   	}
  }
`

export default About
