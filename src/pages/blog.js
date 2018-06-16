import React from 'react'
import Link from 'gatsby-link'

class Blog extends React.Component {
	render() {
		const { data } = this.props  	
		return (
			<div className="Contact">
				<section className="Contact Page">
					<div className="container">
						<div className="row center-xs">
							<div className="Contact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
								<h2 className="Contact__title Page__title">Blog</h2>
								<p className="Contact__description Page__description">Sobre programacion y mas.</p>
							</div>							
						</div>
					</div>					
				</section>
				<div className="Contact__form container--full">
					<div className="row">
						{/*items here*/}
					</div>
				</div>
			</div>
		)
	}
}

export const queryBlog = graphql`
  query QueryBlog {
    contactImage: imageSharp(id: {regex: "/contact/"}) {
      sizes(maxWidth: 4000) {
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
