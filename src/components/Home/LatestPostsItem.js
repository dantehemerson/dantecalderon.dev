import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const Container = styled(Link)`
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  & > div {
    background: white;
    flex-direction: column;
    display: flex;
  }
  text-decoration: none;
`
const ImageWrapper = styled.div`
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  max-height: 140px;
  width: 100%;
`
const Info = styled.div`
  width: 100%;
  max-width: 560px;
  padding: 10px;
`

const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  color: #282a2d;
  margin: 0;
  transition: 0.3s;
  font-size: 16px;
  ${media.sm`
    font-size: 1rem;
  `}
  ${Container}:hover & {
    color: #1976d2;
  }
`

export const LatestPostsItem = ({ post }) => (
  <Container to={post.path}>
    <div>
      <ImageWrapper>
        <Img sizes={post.thumbnail} />
      </ImageWrapper>
      <Info>
        <Title>{post.title}</Title>
      </Info>
    </div>
  </Container>
)
