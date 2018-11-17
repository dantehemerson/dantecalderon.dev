import React from 'react'

import Group from './Group'
import Header from '../components/Header'
import styled from 'styled-components'

import stack from '../data/stack'

const Container = styled.div`
  max-width: 932px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`

export default props => (
	<Container>
		<Header
			top='10px'
			bottom='30px'
			title='Mi Stack'
			description='Estos son los lenguajes y herramietas que se utilizar.'/>
		{
			stack.map((group, index) => <Group key={index} group={group} />)
		}
	</Container>
)
