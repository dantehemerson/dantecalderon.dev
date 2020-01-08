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
  font-size: 15px;
  line-height: 27px;
  .title3 {
    font-family: 'Open sans';
    font-weight: 600;
    margin: 0;
    margin-right: 6px;
  }

  > div {
    & > div {
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .postfix3 {
    font-size: 12px;
    margin: 0;
    margin-left: 6px;
    display: flex;
    align-items: center;
  }
`
export default InfoItem
