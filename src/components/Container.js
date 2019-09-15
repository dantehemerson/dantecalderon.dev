import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100px;
`
export default props => <Container>{props.children}</Container>
