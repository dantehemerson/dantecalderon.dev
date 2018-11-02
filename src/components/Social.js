import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
	text-align: center;
`
const SocialIcon = styled.a`
	margin: 0 5px !important;
	background: #bbbbbb;
	border-radius: 50%;
	width: 38px;
	height: 38px;
	padding: 8px;
	transition: .3s;
	display: inline-block;
	img {
		transition: .3s;
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
export default props => (
	<SocialWrapper>
		<SocialIcon
			className="github--hover"
			href="https://www.github.com/dantehemerson"
			title="Github - Dante Calderón"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Dante Calderón"/>
		</SocialIcon>
		<SocialIcon
			className="twitter--hover"
			href="https://twitter.com/dantehemerson"
			title="Twitter - Dante Calderón"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Dante Calderón"/>
		</SocialIcon>
		<SocialIcon
			className="linkedin--hover"
			href="https://www.linkedin.com/in/dantehemerson/"
			title="Linkedin - Dante Calderón"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Dante Calderón"/>
		</SocialIcon>
		<SocialIcon
			className="instagram--hover"
			href="https://www.instagram.com/dantehemerson/"
			title="Instagram - Dante Calderón"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/instagram.svg?color=ffffff"
				title="Instagram - Dante Calderón"/>
		</SocialIcon>
	</SocialWrapper>
)