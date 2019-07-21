import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const Container = styled.div`
  display: flex;
  margin-bottom: 13px;
  padding-left: 0px;
  margin-top: 20px;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
`

const Image = styled(Img)`
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

const Edit = styled.a`
  font-size: 13px;
  display: flex;
  align-items: center;
  border: none !important;
  img {
    width: 16px;
    height: 16px;
    margin: 0;
  }
  span {
    margin-left: 4px;
    display: none;
  }
  ${media.sm`
    span {
      display: inherit;
    }
  `};
`

export default props => (
  <Container>
    <Image sizes={props.avatar.sizes} />
    <Body>
      <Name>
        <Author to="/about">Dante Calderón</Author> <b>|</b>{' '}
        <span>
          {props.date} · {props.timeToRead} min read
        </span>
      </Name>
      <Edit title="Edit on Github" className="default" href={props.editLink} target="__blank">
        <img src="https://icongr.am/fontawesome/github.svg" alt="Edit on Github" />
        <span>Edit on Github</span>
      </Edit>
    </Body>
  </Container>
)
