import React from 'react'
import styled from 'styled-components'
import Message from '../components/Message'
import Toolbar from '../components/ProjectToolbar'
import Slider from '../components/Slider'
import Tags from '../components/Tags'
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
  ${media.sm`
    font-size: 28px;
  `}
  ${media.md`
    font-size: 37px;
  `}
`
const Subtitle = styled.h2`
  margin-top: 60px;
  font-size: 16px;
  margin-top: 14px;
  font-style: italic;
  color: #656565;
  font-weight: 400;
  font-family: 'Open Sans';
  ${media.sm`
    font-size: 18px;
  `}
  ${media.md`
    font-size: 18px;
  `}
`

export default ({ title, subtitle, repository, website, finished, images, tags }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Toolbar repository={repository} website={website} />
    {!finished && (
      <Message title="Project in progress...">This project is not finished yet, I'm working on it.</Message>
    )}
    <Slider finished={finished} images={images} />
    <Tags items={tags} />
  </Container>
)
