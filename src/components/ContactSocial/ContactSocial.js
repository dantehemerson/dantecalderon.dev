import React from 'react'
import styled from 'styled-components'


const ContactSocialWrapper = styled.div`
	text-align: center;
`
const ContactSocialIcon = styled.a`
	margin: 0 5px;
	background: black;
	border-radius: 50%;
	width: 38px;
	height: 38px;
	padding: 8px;	
	display: inline-block;
	img {
		width: 100%;
		margin: 0;
	}

	&:hover {
		transform: scale(1.15);
	}

	&:hover img {
		transform: scale(.9);
	}
`
export default (props) => (
	<ContactSocialWrapper>										
		<ContactSocialIcon
			className="github" 
			href="https://www.github.com/dantehemerson" 
			title="Github - Dante Calderón" 
			target="_blank">
			<img 
				src="https://icongr.am/fontawesome/github.svg?color=ffffff" 
				title="Github - Dante Calderón"/>
		</ContactSocialIcon>		
		<ContactSocialIcon
			className="twitter" 
			href="https://twitter.com/dantehemerson" 
			title="Twitter - Dante Calderón" 
			target="_blank">
			<img 
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff" 
				title="Twitter - Dante Calderón"/>
		</ContactSocialIcon>		
		<ContactSocialIcon
			className="linkedin" 
			href="https://www.linkedin.com/in/dantehemerson/" 
			title="Linkedin - Dante Calderón" 
			target="_blank">
			<img 
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff" 
				title="Linkedin - Dante Calderón"/>
		</ContactSocialIcon>										
		<ContactSocialIcon
			className="instagram" 
			href="https://www.instagram.com/dantehemerson/" 
			title="Instagram - Dante Calderón" 
			target="_blank">
			<img 
				src="https://icongr.am/fontawesome/instagram.svg?color=ffffff" 
				title="Instagram - Dante Calderón"/>
		</ContactSocialIcon>							
	</ContactSocialWrapper>
)