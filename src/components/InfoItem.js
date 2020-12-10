import React from 'react'
import styled from 'styled-components'

const InfoItem = ({ title, description, postfix, showPostfixImage }) => {
  return (
    <Container>
      <p className="title3">{title}:</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {showPostfixImage && (
        <img
          className="postfixImage"
          src="https://i.ibb.co/6gzCdm5/equaliser-animated-green-73b73928.gif"
        />
      )}
      <span className="postfix3">{postfix}</span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  .postfixImage {
    margin: 0;
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0 -2px 1px 7px;
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
