import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import AuthorPost from '../components/AuthorPost'
import { media } from '../styles'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 26px;
  margin-top: 100px;

  .externalHeaderImage {
    text-align: center;
    width: 100%;
  }
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

export default function PostHeader(props) {
  return (
    <Container>
      <Title id="post_id">{props.title}</Title>
      <AuthorPost date={props.date} avatar={props.avatar} />
      {props.image ? (
        <GatsbyImage alt={`${props.title} cover`} image={props.image} className="zoomable" />
      ) : (
        <img className="externalHeaderImage" src={props.externalImage} />
      )}
    </Container>
  )
}
