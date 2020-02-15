import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const imageSrc = 'https://icongr.am/clarity/arrow.svg?size=24&color=bebebe'

const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  margin: 0 20px;
  transition: 0.3s;
  p {
    font-weight: bold;
    margin: 0;
    color: #4d4d4d;
  }
  img {
    transition: 0.4s;
    transform: rotate(${props => (props.isnext === 'true' ? '90deg' : '-90deg')});
    margin: 0 3px;
  }

  &:hover {
    img {
      transform: rotate(${props => (props.isnext === 'true' ? '90deg' : '-90deg')}) translateY(-3px);
    }
  }
`

const ButtonNextPrev = ({ isnext = true, toIndex }) => {
  return (
    <Button isnext={isnext.toString()} to={`/blog${toIndex ? `/page/${toIndex}` : ''}`}>
      {!isnext && <img alt="Prev Page" src={imageSrc} />}
      <p>{isnext ? 'NEXT' : 'PREV'}</p>
      {isnext && <img alt="Next Page" src={imageSrc} />}
    </Button>
  )
}

export default ButtonNextPrev
