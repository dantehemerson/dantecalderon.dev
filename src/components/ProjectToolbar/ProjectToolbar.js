import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const Container = styled.div`
	margin-top: 16px;
`
export default props => (
	<Container>
		<AwesomeButton
			size="medium"
		  	type="primary">
		  	ENVIAR
		</AwesomeButton>
	</Container>
)