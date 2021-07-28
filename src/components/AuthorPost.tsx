import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const Container = styled.div`
  display: flex;
  margin-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;

  margin-top: 20px;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`

const Image = styled(GatsbyImage)`
  margin: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 13px;
  img {
    margin: 0 !important;
  }
`

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Name = styled.p`
  margin: 0;
  font-size: 11px;
  ${media.sm`
		font-size: 13px;
		b {
			display: inline-block !important;
		}
	`} font-weight: 600;
  color: #767676 !important;
  text-transform: uppercase;
  b {
    color: #575757;
    font-weight: 400;
    display: none;
  }
`

const Author = styled(Link)`
  color: #0077b5 !important;
  text-decoration: none !important;
  display: block;
  ${media.sm`
		display: inline-block;
	`};
`

export default props => (
  <Container>
    <Image fluid={props.avatar.fluid} />
    <Body>
      <Name>
        <Author id="post_authorname" to="/#about-me">
          Dante Calderón
        </Author>{' '}
        <b>|</b> <span id="post_date">{props.date}</span>
      </Name>
    </Body>
  </Container>
)
