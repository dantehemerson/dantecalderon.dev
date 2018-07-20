import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/Card'

class Portfolio extends React.Component {
	render() {
		const { data } = this.props  	
		const post = {
			image: data.image,
			title: 'Mi nueva vida',
			content: 'Apps simples',
			date: '20 Junio 2018'

		}
		return (
			<div className="Portfolio">
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
				<div className="Contact__form container--full">
					<div className="row center-xs start-md">
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<Card data={post} mode="portfolio"/>
						</div>
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<Card data={post} mode="portfolio"/>
						</div>
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<Card data={post} mode="portfolio"/>
						</div>
						<div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
							<Card data={post} mode="portfolio"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export const queryPortfolio = graphql`
  query QueryPortfolio {
    image: imageSharp(id: {regex: "/about-image/"}) {
      sizes(maxWidth: 960) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }   
    site {
      siteMetadata {
            title
      }     
    }
  }
`

export default Portfolio	
