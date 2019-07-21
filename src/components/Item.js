import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

import { media } from '../styles'

const Item = styled.div`
  min-width: 140px;
  width: 50%;
  padding-left: 13px;
  padding-right: 13px;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.sm`
    width: 33.3333%;
  `};
  ${media.md`
    width: 25%;
  `};
  @media (min-width: 932px) {
    width: 20%;
  }
`

const Tooltip = styled.div`
  position: absolute;
  left: -8%;
  bottom: calc(100% - 5px);
  width: 106%;
  margin: 10px;
  text-align: center;
  background: white;
  color: #333;
  font-weight: 600;
  font-size: 13px;
  border-radius: 3px;
  padding: 3px 3px;
  opacity: 0;
  z-index: 333;
  transition: 0.3s;
  box-shadow: 0 0 0px 1px #ddd;
  p {
    position: relative;
    margin: 0;
  }
  span {
    display: inline-block;
    position: absolute;
    left: calc(50% - 11px);
    bottom: -23px;
    border: 10px solid white;
    border-right-color: transparent;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 3px;
  margin-bottom: 0;
  box-shadow: 0 0 4px #191919;
  &:hover + ${Tooltip} {
    opacity: 1;
    bottom: calc(102%);
  }
`

const Name = styled.h3`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  margin: 0;
`

const Type = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 13px;
  color: #969696;
  background: #3d3d3d;
  border-radius: 3px;
  font-weight: 400;
  width: 100%;
  padding: 1px 0;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
`

export default props => (
  <Item>
    <a
      style={{
        marginBottom: `7px`,
        display: `flex`
      }}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        style={{
          background: props.background ? props.background : 'transparent',
          boxShadow: props.background ? '0 0 4px #191919' : '0 0 0 transparent'
        }}
        alt="img"
        src={withPrefix('icons/' + props.icon)}
      />
    </a>
    {props.about && (
      <Tooltip>
        <p>
          {props.about}
          <span />
        </p>
      </Tooltip>
    )}
    <Name>{props.name}</Name>
    <div
      style={{
        width: '100%',
        height: '50px'
      }}
    >
      <Type>{props.type}</Type>
    </div>
  </Item>
)
