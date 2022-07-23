import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { media } from '../styles'
import { Tags } from './Tags'

const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  padding: 1.2rem 0.5rem;
  ${media.md`
      flex-direction: row;
    `}
  margin: 0;

  &:hover {
    background-color: #f2f2f2;
    box-shadow: -16px 0 0 0 #f2f2f2, 16px 0 0 0 #f2f2f2;
  }
  text-decoration: none;
`

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 500px;
  margin: 0;
  ${media.md`
    width: 25%;
  `};
`
const div = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: 560px;
  padding-top: 12px;
  ${media.md`
    padding: 0 0 0 30px;
    width: 75%;
    max-width: 100%;
  `};
`
const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-family: 'Gentium Book Basic', 'Times New Roman', Times, serif;
  color: #052d3e;
  margin: 0;
  transition: 0.3s;
  font-size: 18px;
  ${media.sm`
    font-size: 1.3rem;
  `}
`
const Time = styled.p`
  color: #727272;
  font-size: 11px;
  margin: 0;
  padding: 12px 0px 6px;
`

const Summary = styled.p`
  color: #727272;
  margin: 0;
  font-size: 13px;
  padding-top: 10px;
  ${media.sm`
    font-size: 0.8rem;
  `};
`

export function Card(props) {
  return (
    <Container to={props.data.path}>
      <>
        <ImageWrapper>
          {/* {props.data.thumbnail ? (
          <GatsbyImage alt={`${props.data.title} image`} image={props.data.thumbnail} />
        ) : (
          <img src={props.data.externalThumbnail} />
        )} */}
        </ImageWrapper>
        <div className="ESTO ESTA DENTRO DE NUEVO"></div>
        <div>
          <Title>{props.data.title}</Title>
          <Tags items={props.data?.tags?.slice(0, 4)} />
          <Summary>{props.data.excerpt}</Summary>
          <Time>
            <time dateTime={props.data.date}>{props.data.date} </time>
          </Time>
        </div>
      </>
    </Container>
  )
}
