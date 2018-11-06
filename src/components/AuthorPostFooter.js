import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { media } from '../styles'

const Container = styled.div`
	display: flex;
	margin-bottom: 13px;
	padding-left: 0px;
	margin-top: 20px;
	flex-direction: column;
	align-items: center;
	${media.md`
		flex-direction: row;
		align-items: inherit;
	`}
`

const Image = styled(Img)`
	margin: 0;
	width: 90px;
	height: 90px;
	border-radius: 50%;
	margin-right: 0;
	${media.md`
		width: 150px !important;
		height: 150px !important;			
		margin-right: 21px !important;
	`}
`
const Body = styled.div`
	display: flex;
	font-family: 'Open Sans', sans-serif;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 14px;
	${media.md`
		align-items: inherit !important;
		padding-top: 0 !important;
	`}
`
const By = styled.p`
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 700;
	color: #767676;
	margin: 0;
`

const Name = styled(Link)`
	margin: 0;
	font-size: 26px;
	line-height: 1;
	font-weight: 700;		
	color: #292929 !important;
	text-decoration: none !important;
`

const About = styled.p`
	color: rgba(0,0,0,.54) !important;
	font-size: 15px;
	font-weight: 600;
	padding-top: 10px;
	margin: 0;
	text-align: center;
	${media.md`
		text-align: left !important;
	`}
`
export default props => (
	<Container>
		<div>
			<Image sizes={ props.avatar.sizes } />
		</div>
		<Body>
			<By>{ props.make ? 'Hecho' : 'Escrito'} por</By>
			<Name to="/about">Dante Calderón</Name>
			<About>Contribuidor de Software libre(@linux, @git). Desarrollador Web utilizando React, Node y Mongo. También me gusta desarrollar videojuegos, puedes ver los que he creado en mi <Link to="/portfolio">portafolio</Link>.</About>			
		</Body>
	</Container>
)