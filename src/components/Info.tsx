import { mergeAdvanced } from 'object-merge-advanced'
import React from 'react'
import styled from 'styled-components'
import { GLOBAL_CONTEXT_KEY } from '../../gatsby/gatsby.constants'
import { initialGlobalContext } from '../contex/initial.global.context'
import { secureTimeAgo } from '../helpers/date'
import { getMyGithubInfo } from '../helpers/requests/githubInfo'
import { useLocalStorage } from '../hooks/useLocalStorage'
import InfoItem from './InfoItem'

export function Info() {
  const [info, setInfo] = useLocalStorage(GLOBAL_CONTEXT_KEY, initialGlobalContext)
  console.log('🤫 Dante ➤ ThemeProvider ➤ info', info)

  React.useEffect(() => {
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

  console.log('🤫 Dante ➤ Info ➤ infoBot', info)

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
        <InfoItem title="👨‍💻 Working on" description={info.githubStatus.company} />
        <InfoItem
          title="🚀 Contributions"
          description={`<b class='code'>${
            info.githubStatus.contributions || 0
          }</b>&nbsp;in the last year`}
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
        <InfoItem
          title={'📚 Reading'}
          description={`<a href='${info.reading.profileUrl}' target='_blank'>${info.reading.title}</a>`}
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
  border: 1px solid #d3c79e;
  padding: 25px;
`
