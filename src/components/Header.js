import React from 'react'
import styled from 'styled-components'

import { media } from '../styles'

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;	
	margin-top: ${props => props.top ? props.top : '100px' };
	margin-bottom: ${props => props.bottom ? props.bottom : '10px' };
	max-width: 820px;
	padding: 0 13px;
`

const Title = styled.h1`
	font-family: 'Open Sans', sans-serif;
	color: ${props => props.color ? props.color : '#f06668'};
	font-size: 11vw;
	${media.md`
		font-size: 78px;
	`}
	text-align: center;
	line-height: 100%;
	font-weight: 900;
	letter-spacing: -1px;
	text-transform: uppercase;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: ${props => props.color ? props.color : '#f06668'};
`
const Description = styled.p`
	color: #353535;
	text-align: center;
	margin: 0;
	a {
		text-decoration: none;
		color: #3384a0;
	}
	font-size: 15px;
	${media.sm`
		font-size: 16px;
	`}
`

export default props => (
	<Container top={props.top} bottom={props.bottom}>
		<Title
			color={props.color}>
			{ props.title }
		</Title>
		{
			props.description &&
			<Description>{ props.description }</Description>
		}
	</Container>
)