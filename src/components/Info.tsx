import React, { useContext } from 'react'
import styled from 'styled-components'
import InfoItem from './InfoItem'
import { secureTimeAgo } from '../helpers/date'
import { GlobalContext } from '../contex/global.context'
import { GLOBAL_CONTEXT_KEY } from '../../gatsby/gatsby.constants'
import { window } from 'browser-monads-ts'
import { atom, RecoilRoot, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { initialGlobalContext } from '../contex/initial.global.context'

const { persistAtom } = recoilPersist()

const counterState = atom({
  key: 'recoilInfo',
  default: initialGlobalContext,
  effects_UNSTABLE: [persistAtom],
})

export function Info() {
  const [recoilInfo, setRecoilInfo] = useRecoilState(counterState)
  console.log('🤫 Dante ➤ Info ➤ recoilInfo', recoilInfo)
  const { info: infoBot } = useContext(GlobalContext)
  console.log('🤫 Dante ➤ Info ➤ infoBot', infoBot)

  const info = recoilInfo || infoBot || window.localStorage.getItem(GLOBAL_CONTEXT_KEY)
  console.log('🤫 Dante ➤ Info ➤ info', info)
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
