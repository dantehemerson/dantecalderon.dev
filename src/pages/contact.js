import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ContactForm from '../components/ContactForm'
import ContactSocial from '../components/ContactSocial'
import SEO from '../components/SEO'

  import { AwesomeButton } from 'react-awesome-button';
  import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
 



class Contact extends React.Component {
	render() {
		const { data } = this.props  	
		const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')	 

		return (
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

    <AwesomeButton
        cssModule={AwesomeButtonStyles}
        type="twitter"
      >
        Share
      </AwesomeButton>
<AwesomeButton  type="primary">Primary</AwesomeButton>
				 <AwesomeButton type="facebook">Button</AwesomeButton>
				<div className="Contact__form container--full">
					<div className="row center-xs">
						<div className="col-xs-12 col-md-7 start-xs">
							<ContactForm/>
						</div>						
					</div>
				</div>
			</div>
		)
	}
}

export const queryContact = graphql`
  query QueryContact {
    contactImage: imageSharp(id: {regex: "/contact/"}) {
      sizes(maxWidth: 4000) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }     
    site {
      siteMetadata {
         title
         siteUrl
      }     
    }
  }
`

export default Contact	
