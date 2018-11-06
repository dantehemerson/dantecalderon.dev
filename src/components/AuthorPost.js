import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { media } from '../styles'

const Container = styled.div`
	display: flex;
	margin-bottom: 13px;
	padding-left: 0px;
	margin-top: 20px;
	font-family: 'Open Sans', sans-serif;
`

const Image = styled(Img)`
	margin: 0;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 13px;
`

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Name = styled.p`
	margin: 0;
	font-size: 11px;
	${media.sm`
		font-size: 13px;
		b {
			display: inline-block !important;
		}
	`}
	font-weight: 600;
	color: #767676 !important;	
	text-transform: uppercase;	
	b {
		color: #575757;
		font-weight: 400;
		display: none;
	}
`

const Author = styled(Link)`
	color: #0077b5 !important;
	text-decoration: none !important;
	display: block;
	${media.sm`
		display: inline-block;
	`}
`

export default props => (
	<Container>
		<div>
		<Image sizes={ props.avatar.sizes } />
		</div>
		<Body>
			<Name>
				<Author to="/about">Dante Calderón</Author> <b>|</b> <span>{ props.date } · { props.timeToRead } min de lectura</span></Name>
		</Body>
	</Container>
)