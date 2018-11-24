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
						  title="Contact"
						  url={`${siteUrl}/contact`}
						/>
						<Header
							title='Contact'
							description={['First of all, thanks for visiting my blog. If you have any questions, you want to work with me or you want to leave me some words. I would love to hear you. You can send me an email to ',<b>dantehemerson@gmail.com</b>, ':']}
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
