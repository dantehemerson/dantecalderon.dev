import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

import image from '../assets/images/404.jpg'
import { media } from '../styles'
import Layout from '../components/Layout'

const Container = styled.main`
	display: flex;	
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	min-height: 380px;
`

const Title = styled.h1`
	text-align: center;
	font-size: 16px;	
	padding: 0 10px 25px 10px;
	font-weight: 400;
	text-transform: uppercase;
	font-family: sans-serif !important;
	margin: 0;
	color: #4B6A8E;
	${media.sm`
		font-size: 20px;
	`}
`

const Image = styled.img`
	width: 100%;
	max-width: 479px;
`

const Button = styled(AwesomeButton)`

`

export default props => (		
	<Layout location={ props.location } simple>
		<Container>
			<Helmet>
				<title>{`Ops :(`}</title>
			</Helmet>
			<Image src={image}/>
			<Title>No encontramos lo que buscabas</Title>		
			<Button
				href='/'
				>IR AL INICIO</Button>
		</Container>		
	</Layout>
)