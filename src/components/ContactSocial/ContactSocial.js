import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const ContactSocialWrapper = styled.div`
	text-align: center;
`

export default props => (
	<ContactSocialWrapper>
		<AwesomeButton
			className="ContactSocial__icon"
			type="github"
			size="small"
			href="https://www.github.com/dantehemerson"
			title="Github - Dante Calderón"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Dante Calderón"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="twitter"
			size="small"
			href="https://twitter.com/dantehemerson"
			title="Twitter - Dante Calderón"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Dante Calderón"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="linkedin"
			size="small"
			href="https://www.linkedin.com/in/dantehemerson/"
			title="Linkedin - Dante Calderón"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Dante Calderón"
				alt="img"/>
		</AwesomeButton>
		<AwesomeButton
			className="ContactSocial__icon"
			type="instagram"
			size="small"
			href="https://www.instagram.com/dantehemerson/"
			title="Instagram - Dante Calderón"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
				title="Instagram - Dante Calderón"
				alt="img"/>
		</AwesomeButton>
	</ContactSocialWrapper>
)