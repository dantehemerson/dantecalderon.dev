import React from 'react'
import styled from 'styled-components'

type InfoItem = {
  title: string
  description: string
  postfix?: string
  showPostfixImage?: boolean
}

const InfoItem = ({ title, description, postfix, showPostfixImage }: InfoItem) => {
  console.log(
    '🤫 Dante ➤ InfoItem ➤ title, description, postfix, showPostfixImage',
    title,
    description,
    postfix,
    showPostfixImage
  )
  return (
    <Container>
      <p className="title3">{title}:</p>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {showPostfixImage && (
        <img
          alt="listening"
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
  font-size: 12px;
  line-height: 24px;
  .code {
    display: contents;
    font-family: 'Fira Code';
  }
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
      color: #0057bc;
      max-width: 280px;
      overflow: hidden;
      text-decoration: none;
      text-overflow: ellipsis;
    }
    color: #133a4d;
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
    font-size: 10px;
    margin: 0;
    font-weight: 400;
    color: #8e8e8e;
    margin-left: 6px;
    display: flex;
    align-items: center;
  }
`
export default InfoItem
