import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: yellow;
`

export default props => (
  <Container>
    {
      props.images.map(item => <span>{item.description}</span>)
    }
  </Container>
)