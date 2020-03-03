import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin-left: 0;
`

const Container = styled.div``

const Item = styled.li`
  padding: 2px 10px;
  background: #f7f7f7;
  color: #6a6a6a;
  border-radius: 25px;
  text-decoration: none;
  margin: 0 2px;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: inline-block;
  text-transform: capitalize;
  &:hover {
    background: #e2e2e2;
  }
`

export default props => (
  <Container>
    <List>
      {props.items.map(item => (
        <Item>{item}</Item>
      ))}
    </List>
  </Container>
)
