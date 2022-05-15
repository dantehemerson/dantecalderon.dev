import { Link } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

type LatestPostsItemProps = {
  post: {
    path: string
    fluidImg: FluidObject
    title: string
  }
}

export const LatestPostsItem = ({ post }: LatestPostsItemProps) => (
  <Container to={post.path}>
    <div>
      <ImageWrapper>
        <GatsbyImage alt="Post item image" image={post.fluidImg} />
      </ImageWrapper>
      <Info>
        <Title>{post.title}</Title>
      </Info>
    </div>
  </Container>
)

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
