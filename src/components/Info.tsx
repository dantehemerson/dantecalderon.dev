import React, { useEffect } from 'react'
import { mergeAdvanced } from 'object-merge-advanced'
import styled from 'styled-components'
import { secureTimeAgo } from '../helpers/date'
import { getMyGithubInfo } from '../helpers/requests/githubInfo'
import InfoItem from './InfoItem'
import { useState } from 'react'

export function Info() {
  const [info, setInfo] = useState(undefined)

  useEffect(() => {
    const loadGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        console.log('🤫 Dante ➤ loadGithubInfo ➤ newInfo', newInfo)
        setInfo(prevInfo =>
          mergeAdvanced(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: newInfo?.listening?.playing ?? false,
          })
        )
      } catch (error) {
        console.error('Error loading info', error)
      }
    }

    loadGithubInfo()
    const intervalId = setInterval(() => loadGithubInfo(), 10000)

    return () => {
      console.log('Clearing interval')
      clearInterval(intervalId)
    }
  }, [])

  const isLoading = info === undefined

  console.log('🤫 Dante ➤ Info ➤ infoBot', info, isLoading)

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
          isLoading={isLoading}
          postfix={secureTimeAgo(info?.githubStatus?.updatedAt)}
        >
          {info?.githubStatus?.status}
        </InfoItem>
        <InfoItem title="👨‍💻 Working on" isLoading={isLoading}>
          {info?.githubStatus?.company}
        </InfoItem>
        <InfoItem title="🚀 Contributions" isLoading={isLoading}>
          <>
            <b className="code">{info?.githubStatus?.contributions ?? 0}</b>&nbsp;in the last year
          </>
        </InfoItem>
        <InfoItem
          title="👷 Latest Commit"
          isLoading={isLoading}
          postfix={secureTimeAgo(info?.latestCommit?.createdAt)}
        >
          <a href="${info?.latestCommit?.url}" target="_blank">
            ${info?.latestCommit?.message}
          </a>
        </InfoItem>
        <InfoItem
          title="🎶 Listening"
          isLoading={isLoading}
          showPostfixImage={info?.listening?.playing}
          postfix={secureTimeAgo(info?.listening?.lastPlayingDate)}
        >
          <a href="${info?.listening?.url}" target="_blank">
            ${info?.listening?.name}
          </a>
        </InfoItem>
        <InfoItem title={'📚 Reading'} isLoading={isLoading}>
          <a href="${info?.reading?.profileUrl}" target="_blank">
            ${info?.reading?.title}
          </a>
        </InfoItem>
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
  border: 1px solid #d3c79e;
  padding: 25px;
`
