import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Link from 'gatsby'
import { graphql } from "gatsby"
import get from 'lodash/get'

import ContactForm from '../components/ContactForm'
import ContactSocial from '../components/ContactSocial'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

class Contact extends React.Component {
	render() {
		const { data } = this.props
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
			<PageTransition>
				<Layout location={ this.props.location }>
					<div className="Contact">
						<SEO
						  title="Contacto"
						  url={`${siteUrl}/contact`}
						/>
						<section className="HeaderContact Page">
							<div className="container">
								<div className="row center-xs">
									<div className="HeaderContact__titlewrap Page__titlewrap text-center col-xs-12 col-md-10 col-lg-7">
										<h2 className="HeaderContact__title Page__title">Contacto</h2>
										<p className="HeaderContact__description Page__description">Antes que nada, gracias por visitar mi blog. Si tienes alguna pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte. Puedes seguirme en mis redes sociales ó puedes enviarme un email a <b>dantehemerson@gmail.com</b>:</p>
									</div>
								</div>
							</div>
						</section>
						<ContactSocial />
						<div className="Contact__form container--full">
							<div className="row center-xs">
								<div className="col-xs-12 col-md-7 start-xs">
									<ContactForm/>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</PageTransition>
		)
	}
}

export const queryContact = graphql`
  	query QueryContact {
    	site {
      	siteMetadata {
         	title
         	siteUrl
      	}
    	}
  	}
`

export default Contact