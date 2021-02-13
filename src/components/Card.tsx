import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const Container = styled(Link)`
  & > div {
    display: flex;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    padding: 1rem 0.5rem;
    ${media.md`
      flex-direction: row;
    `} * {
      margin: 0;
    }

    &:hover {
      background-color: #f2f2f2;
      box-shadow: -16px 0 0 0  #f2f2f2, 16px 0 0 0  #f2f2f2;
    }
  }
  text-decoration: none;
`
const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  ${media.md`
    width: 25%;
  `};
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  max-width: 560px;
  padding-top: 12px;
  ${media.md`
    padding: 0 0 0 50px;
    width: 75%;
    max-width: 100%;
  `};
`
const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  color: #282a2d;
  transition: 0.3s;
  font-size: 17px;
  ${media.sm`
    font-size: 1.1rem;
  `}
`
const Time = styled.p`
  color: #757575;
  font-size: 14px;
  text-align: right;
  padding: 6px 6px 6px;
`

const Excerpt = styled.p`
  color: #757575;
  font-size: 15px;
  ${media.sm`
    font-size: 0.9rem;
  `};
`

export default props => (
  <Container to={props.data.path}>
    <div>
      <ImageWrapper>
        <Img fluid={props.data.thumbnail} />
      </ImageWrapper>
      <Info>
        <Title>{props.data.title}</Title>
        <Excerpt>{props.data.excerpt}</Excerpt>
        <Time>
          <time dateTime={props.data.date}>{props.data.date} </time>
        </Time>
      </Info>
    </div>
  </Container>
)
