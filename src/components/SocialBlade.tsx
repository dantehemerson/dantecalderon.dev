import React from 'react'
import styled from 'styled-components'
import { INFO } from '../data/info'

const SocialWrapper = styled.div`
  text-align: center;
`
const SocialIcon = styled.a`
  margin: 0 2px !important;
  width: 26px;
  height: 26px;
  padding: 4px;
  transition: 0.3s;
  display: inline-block;
  img {
    width: 100%;
    margin: 0;
  }
`

export function SocialHome() {
  const { social, title } = INFO

  return (
    <SocialWrapper>
      {social.slice(0, 4).map(item => (
        <SocialIcon
          key={item.title}
          href={item.link}
          title={`${item.title} - ${title}`}
          rel="noopener"
          target="_blank"
        >
          <img
            alt={item.title}
            src={
              item.icon === 'dev'
                ? 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg'
                : `https://icongr.am/fontawesome/${item.icon}.svg?color=052d3f`
            }
          />
        </SocialIcon>
      ))}
    </SocialWrapper>
  )
}
