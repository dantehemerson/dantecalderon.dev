import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'
import Info from '../Info'
import Rotational from '../Rotational'
import Social from '../SocialBlade'

const HeaderHome = ({ data }) => (
  <div
    style={{
      background: '#e8fdf5',
    }}
  >
    <Container className="row">
      <MainInfoWrapper>
        <Title>{data.site.siteMetadata.title}</Title>
        <Subtitle>{data.site.siteMetadata.subtitle}</Subtitle>
        <Social />
        <Info />
      </MainInfoWrapper>
      <Rotational avatar={data.avatar} />
    </Container>
  </div>
)

const Container = styled.p`
  min-height: 600px;
  max-width: 1080px;
  display: grid;
  padding-top: 80px;
  margin: 0 auto !important;
  grid-template-columns: minmax(min-content, 590px);
  justify-content: center;
  align-items: center;
  ${media.md`
    min-height: 500px;
    padding-top: 38px;
    grid-template-columns: 1fr 1fr;
  `};
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  font-family: 'Gentium Book Basic', 'Times New Roman', Times, serif;
  color: #052d3f;
  margin-bottom: 0;
  position: relative;
  ${media.sm`
    font-size: 2.4rem;
  `};
`

const MainInfoWrapper = styled.div`
  text-align: center;
  padding: 0 5px;
`

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px 0 20px 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #052d3f;
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        avatar: imageSharp(fluid: { originalName: { regex: "/avatar.jpg/" } }) {
          fluid(maxWidth: 360) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        site {
          siteMetadata {
            title
            siteUrl
            subtitle
          }
        }
      }
    `}
    render={data => <HeaderHome data={data} {...props} />}
  />
)
