import React from 'react'
import styled from 'styled-components'

const InfoItem = ({ title, description, postfix }) => {
  return (
    <Container>
      <p className="title3">{title}:</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <span className="postfix3">{postfix}</span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  line-height: 27px;
  .title3 {
    font-family: 'Open sans', sans-serif;
    font-weight: 600;
    margin: 0;
    margin-right: 6px;
  }

  > div {
    & > div {
      margin-right: 4px;
    }
    a {
      white-space: nowrap;
      max-width: 222px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    color: #484848;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  .postfix3 {
    font-size: 12px;
    margin: 0;
    color: #8e8e8e;
    margin-left: 6px;
    display: flex;
    align-items: center;
  }
`
export default InfoItem
