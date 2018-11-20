import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

import Social from '../Social'
import Rotational from '../Rotational'
import Wrapper from '../Wrapper'
import { media } from '../../styles'
import grain_image from '../../assets/images/grain.png'

const ButtonAbout = styled(AwesomeButton)`
  width: 141px !important;
  margin-top: 34px !important;
`

const Container = styled(Wrapper)`
  min-height: 600px;
  padding-top: 100px;
  margin: 0 auto !important;
  ${media.lg`
    height: 100vh;
    min-height: 500px;
    padding-top: 38px;
  `}
`

const Title = styled.h1`
  font-size: 12vw;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Gentium Book Basic';
  color: #363636;
  ${media.sm`
    font-size: 4.4rem;
  `}
`

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 20px 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #1976d2;
`

const HeaderHome = ({ data }) => (
  <div style={{
    background: '#f3f3f3',
    backgroundImage: `url(${grain_image})`
    }}>
    <Container
      wrap='wrap'
      maxWidth='1100px'
      className='row'
      justifyContent='center'>
        <div className="col-xs-12 col-lg-5 center-xs">
          <Title>{ data.site.siteMetadata.title }</Title>
          <Subtitle>{ data.site.siteMetadata.subtitle }</Subtitle>
          <Social/>
          <ButtonAbout href="/about" >SOBRE MÍ</ButtonAbout>
        </div>
        <div className="col-xs-12 col-lg-7">
          <Rotational avatar={ data.avatar }/>
        </div>
    </Container>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        avatar: imageSharp (fluid: {
          originalName: {
            regex: "/avatar.jpg/"
          }
        }) {
          sizes(maxWidth: 360) {
            ...GatsbyImageSharpSizes_tracedSVG
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
    render={ data => <HeaderHome data={data} {...props}/> }/>
)
