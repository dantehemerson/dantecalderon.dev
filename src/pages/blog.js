import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/Card'

class Blog extends React.Component {
	render() {
		const { data } = this.props  	
		const post = {
			image: data.image,
			title: 'Announcing Our freeCodeCamp 2018 Top Contributor Award Winners',
			content: 'Este es mi nuev pagina web, ya que la anterior estaba muy antigua. Pero como vamos a empezar a desarrollar un nuevo tipo de publiciones ahora como siempre esto es muy simple para desarrollar ya que el proceso es bastante simple...',
			date: '20 Junio 2018'
		}
		return (
			<div className="Blog">
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
				<div className="Contact__form container--full">
					<div className="row center-xs">
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
						</div>
						<div className="col-xs-12">
							<Card data={post} mode="blog" />
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
      }     
    }
  }
`

export default Blog	
