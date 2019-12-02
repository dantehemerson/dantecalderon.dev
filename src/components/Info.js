import React, { useState, useEffect } from 'react'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import TimeAgo from 'javascript-time-ago'
import styled from 'styled-components'

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
      Status:
      <div dangerouslySetInnerHTML={{ __html: info.status }} /> <Separator>·</Separator>
      <UpdatedAt>{info.updatedAt}</UpdatedAt>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  font-weight: 600;
  > div {
    display: flex;
    div {
      padding-right: 10px;
    }
    img {
      margin: 0;
    }
  }
`

const Separator = styled.span`
  margin: 0 5px;
`

const UpdatedAt = styled.p`
  color: #a2a2a2;
  margin: 0;
`

export default Info
