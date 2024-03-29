import React, { useEffect } from 'react'
import { mergeAdvanced } from 'object-merge-advanced'
import styled from 'styled-components'
import { GLOBAL_CONTEXT_KEY } from '../../gatsby/gatsby.constants'
import { secureTimeAgo } from '../helpers/date'
import { getMyGithubInfo } from '../helpers/requests/githubInfo'
import { useLocalStorage } from '../hooks/useLocalStorage'
import InfoItem from './InfoItem'

export function Info() {
  const [info, setInfo] = useLocalStorage(GLOBAL_CONTEXT_KEY, undefined)

  useEffect(() => {
    const loadGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        setInfo(prevInfo => {
          return mergeAdvanced(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: newInfo?.listening?.playing ?? false,
          })
        })
      } catch (error) {
        console.error('Error loading info', error)
      }
    }

    loadGithubInfo()
    const intervalId = setInterval(() => loadGithubInfo(), 3_000)

    return () => {
      console.log('Clearing interval')
      clearInterval(intervalId)
    }
  }, [])

  const isLoading = info === undefined

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
        {
          info?.githubStatus?.company &&
          (<InfoItem title="👨‍💻 Working on" isLoading={isLoading}>
            {info?.githubStatus?.company}
          </InfoItem>)
        }
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
          <a href={info?.latestCommit?.url} target="_blank">
            {info?.latestCommit?.message}
          </a>
        </InfoItem>
        <InfoItem title={'📚 Reading'} isLoading={isLoading}>
          <a href={info?.reading?.profileUrl} target="_blank">
            {info?.reading?.title}
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
