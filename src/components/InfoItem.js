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
  .title3 {
    background: red;
    margin-right: 10px;
    margin: 0;
  }

  > div {
    display: flex;
  }
  .postfix3 {
    background: blue;
    margin: 0;
  }
`
export default InfoItem
