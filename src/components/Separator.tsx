import React from 'react'
import styled from 'styled-components'
import fin from '../assets/images/finseparator.svg'
import normal from '../assets/images/separator.svg'

const Container = styled.div`
  text-align: center;
`

const Image = styled.img`
  border: 0 !important;
  max-width: 800px;
  width: 100%;
`

export default ({ type = 'normal' }) => (
  <Container>
    <Image alt="Separator" src={type === 'fin' ? fin : normal} />
  </Container>
)
