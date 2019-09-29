import React from 'react'
import styled from 'styled-components'
import stack from '../data/stack'
import Group from './Group'

const Container = styled.div`
  max-width: 932px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`

export default props => (
  <Container>
    {stack.map((group, index) => (
      <Group key={index} group={group} />
    ))}
  </Container>
)
