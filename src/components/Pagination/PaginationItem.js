import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const ButtonPage = styled(Link)`
  width: 36px;
  height: 36px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
  border-radius: 50%;
  &:hover {
    background: #91caf75e;
  }
  ${props =>
    props.selected &&
    css`
      && {
        background: #3f86f5;
        color: white;
      }
    `};
  span {
    line-height: 14px;
    position: relative;
  }
`

function PaginationItem({ selected, index }) {
  return (
    <div>
      <ButtonPage
        selected={selected}
        to={`/blog${index ? `/page/${index}` : ''}`}
        disabled={selected}
      >
        <span>{index}</span>
      </ButtonPage>
    </div>
  )
}

PaginationItem.propTypes = {
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
}

export { PaginationItem }
