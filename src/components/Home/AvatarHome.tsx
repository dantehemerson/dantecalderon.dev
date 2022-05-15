import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

export function AvatarHome(props) {
  return (
    <Container>
      <AvatarContainer>
        <GatsbyImage alt="Avatar" image={props.image} />
      </AvatarContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`
const AvatarContainer = styled.div`
  width: 150px;
  ${media.sm`
    width: 150px;
  `}
  ${media.lg`
    width: 200px;
  `}

  .gatsby-image-wrapper {
    z-index: 1;
    overflow: inherit !important;
    display: block;
    &::before {
      content: '';
      position: absolute;
      top: -21%;
      left: -25%;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background-color: #bcebd4;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 4%;
      left: 6%;
      background-color: #f5c0a2;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`
