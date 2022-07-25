import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useIsClient } from '../hooks/useClient'

type InfoItem = {
  title: string
  isLoading: boolean
  postfix?: string
  showPostfixImage?: boolean
  children: JSX.Element
}

const InfoItem: React.FC<InfoItem> = ({
  title,
  postfix,
  showPostfixImage,
  isLoading,
  children,
}) => {
  const { key } = useIsClient()

  return (
    <Container key={key}>
      <p className="title3">{title + ':'}</p>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <div>{children}</div>
          {showPostfixImage && (
            <img
              alt="listening"
              className="postfixImage"
              src="https://i.ibb.co/6gzCdm5/equaliser-animated-green-73b73928.gif"
            />
          )}
          <span className="postfix3">{postfix}</span>
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 24px;
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

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(50deg 46% 76%);
  }

  100% {
    background-color: hsl(50deg 46% 87%);
  }
`

const Skeleton = styled.div`
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;

  width: 200px;
  height: 18px;
  border-radius: 4px;
`

export default InfoItem
