import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f8ffff;
  color: #276f86;
  margin: 10px 0 6px;
  padding: 1em 1.5em;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  border-radius: 3px;
  box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;
  p {
    margin: 0;
  }
`

const Title = styled.p`
  color: #0e566c;
  font-size: 1.1em;
  font-weight: bold;
  padding-bottom: 4px;
`

export default props => (
  <Container>
    {props.title && <Title>{props.title}</Title>}
    {props.children}
  </Container>
)
