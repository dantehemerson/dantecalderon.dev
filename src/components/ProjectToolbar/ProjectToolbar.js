import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const Container = styled.div`
	margin-top: 30px;
	margin-bottom: 12px;
	font-family: 'Open Sans';
`
export default props => (
	<Container>
		<AwesomeButton
			size="medium"
		  	type="primary">
		  	<svg className="Shortcut__icon" fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" style={{verticalAlign: 'text-top'}}><g><path d="m23.4 5h11.6v11.6h-3.4v-5.9l-16.3 16.3-2.3-2.3 16.3-16.3h-5.9v-3.4z m8.2 26.6v-11.6h3.4v11.6q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h11.6v3.4h-11.6v23.2h23.2z" /></g>
			  	</svg>
		  	VISITAR SITIO
		</AwesomeButton>
	</Container>
)