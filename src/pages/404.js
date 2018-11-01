import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.main`
	display: flex;
	background: #fbf8f3;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	min-height: 380px;

	svg{
		font-weight:bold;
		max-width:600px;
		height:auto;
	}
`
const Title = styled.h1`
	font-family: 'Open Sans';
	text-align: center;
	font-size: 5vw;
`

const Description = styled.p`
	text-align: center;
	color: #989898;
	a {
		color: #282a2d;
	}
`

export default props => (
		<Layout location={ props.location }>
			<Container>
				<Helmet>
					<title>{`Ops :(`}</title>
				</Helmet>
				<svg viewBox="0 0 100 33">
					<defs>
						<linearGradient id="gradient" x1={0} x2={0} y1={0} y2={1}>
							<stop offset="5%" stopColor="#CB9A48" />
							<stop offset="95%" stopColor="#C89B4F" />
						</linearGradient>
						<pattern id="wave" x={0} y={11} width={120} height={35} patternUnits="userSpaceOnUse">
							<path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
								<animateTransform attributeName="transform" begin="0s" dur="1.5s" type="translate" from="0,0" to="40,0" repeatCount="indefinite" />
							</path>
						</pattern>
					</defs>
					<text textAnchor="middle" x={50} y={30} fontSize={30} fill="url(#wave)" fillOpacity="0.6">404</text>
					<text textAnchor="middle" x={50} y={30} fontSize={30} fill="url(#gradient)" fillOpacity="0.1">404</text>
				</svg>
				<Title>Página no encontrada</Title>
				<Description>Ir al <Link to="/">Inicio</Link>.</Description>
			</Container>
		</Layout>
)