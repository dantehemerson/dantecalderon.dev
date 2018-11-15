import React from 'react'
import { graphql } from "gatsby"
import get from 'lodash/get'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'
import ContactSocial from '../components/ContactSocial'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { pages } from '../utils'

const ContactFormWrapper = styled.div`
	max-width: 690px;
	margin: 0 auto;
`

class Contact extends React.Component {
	render() {
   	const siteUrl = get(this, 'props.data.site.siteMetadata.siteUrl')
		return (
				<Layout location={ this.props.location } active={ pages.contact }>
					<div className="Contact">
						<SEO
						  title="Contacto"
						  url={`${siteUrl}/contact`}
						/>		
						<Header
							title='Contacto'
							description={['Antes que nada, gracias por visitar mi blog. Si tienes alguna pregunta, quieres que trabajemos juntos o quieres dejarme unas palabras. Me encantaría escucharte. Puedes enviarme un email a ',<b>dantehemerson@gmail.com</b>, ':']}
							color='#61b865'
							bottom='24px'/>
						<ContactSocial />
						<ContactFormWrapper>															
							<ContactForm/>								
						</ContactFormWrapper>
					</div>
				</Layout>
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