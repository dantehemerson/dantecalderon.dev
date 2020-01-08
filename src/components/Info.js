import React, { useState, useEffect } from 'react'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import TimeAgo from 'javascript-time-ago'
import styled from 'styled-components'
import InfoItem from './InfoItem'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

const Info = () => {
  const [info, setInfo] = useState({
    status: '',
    updatedAt: '',
    bussy: false,
  })

  useEffect(() => {
    const setGithubInfo = async () => {
      const timeAgo = new TimeAgo('en-US')

      try {
        const info = await getMyGithubInfo()
        setInfo({
          ...info,
          updatedAt: timeAgo.format(new Date(info.updatedAt)),
        })
      } catch (err) {}
    }

    setGithubInfo()
  }, [])

  return (
    <Container>
      <InfoItem title="Status" description={info.status} postfix={info.updatedAt} />
      <InfoItem title="Working on" description={info.company} />
      <InfoItem title="Contributions" description={`${info.totalContributions} in the last year`} />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default Info
