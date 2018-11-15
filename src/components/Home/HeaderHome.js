import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

import Social from '../Social'
import Rotational from '../Rotational'

const ButtonAbout = styled(AwesomeButton)`
  width: 141px !important;
  margin-top: 34px !important;
`

const HeaderHome = ({ data }) => (
  <main className="Header-Home">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-5" style={{
          textAlign: 'center'
        }} >
          <h1 className="Header-Home__title" >{ data.site.siteMetadata.title }</h1>
          <h2 className="Header-Home__subtitle">{ data.site.siteMetadata.subtitle }</h2>
          <Social />
          <ButtonAbout
            href="/about" >
            SOBRE MÍ
          </ButtonAbout>
        </div>
        <div className="col-xs-12 col-lg-7">
          <Rotational avatar={ data.avatar }/>
        </div>
      </div>
    </div>
  </main>
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
          sizes(maxWidth: 720) {
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
