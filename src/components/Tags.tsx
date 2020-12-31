import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 760px;
  @media (min-width: 992px) {
    max-width: 960px;
  }
`

const Item = styled(Link)`
  padding: 2px 7px;
  background: #f7f7f7;
  color: #6a6a6a;
  border-radius: 3px;
  margin: 0 2px;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: inline-block;
  text-transform: capitalize;
  text-decoration: none !important;
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
