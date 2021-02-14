import React from 'react'
import styled from 'styled-components'
import { useInfo } from '../hooks/useInfo'
import InfoItem from './InfoItem'
import { secureTimeAgo } from '../utils/date'

const Info = () => {
  const info = useInfo()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container>
        <InfoItem
          title="😊 Status"
          description={info.githubStatus.status}
          postfix={secureTimeAgo(info.githubStatus.updatedAt)}
        />
        <InfoItem title="⛏ Working on" description={info.githubStatus.company} />
        <InfoItem
          title="🚀 Contributions"
          description={`${info.githubStatus.contributions || 0} in the last year`}
        />
        <InfoItem
          title="👷 Latest Commit"
          description={`<a href='${info.latestCommit.url}' target='_blank'>${info.latestCommit.message}</a>`}
          postfix={secureTimeAgo(info.latestCommit.createdAt)}
        />
        <InfoItem
          title="🎶 Listening"
          showPostfixImage={info.listening.playing}
          description={`<a href='${info.listening.url}' target='_blank'>${info.listening.name}</a>`}
          postfix={secureTimeAgo(info.listening.lastPlayingDate)}
        />
      </Container>
    </div>
  )
}

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  min-width: 366px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #bcebd3;
  padding: 25px;
`

export default Info
