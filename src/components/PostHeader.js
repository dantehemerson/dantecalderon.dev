import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import AuthorPost from '../components/AuthorPost'
import { media } from '../styles'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 26px;
  margin-top: 100px;
`

const Title = styled.h1`
  margin-top: 60px;
  font-size: 28px;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  ${media.sm`
    font-size: 28px;
  `}
  ${media.md`
    font-size: 37px;
  `}
`

export default props => (
  <Container>
    <Title>{props.title}</Title>
    <AuthorPost
      editLink={props.editLink}
      date={props.date}
      timeToRead={props.timeToRead ? props.timeToRead : '3'}
      avatar={props.avatar}
    />
    <Img sizes={props.image} />
  </Container>
)
