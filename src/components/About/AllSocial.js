import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const SocialWrapper = styled.div`
  text-align: center;
  padding-bottom: 30px;
`
const SocialIcon = styled.a`
  margin: 0 5px !important;
  background: #bbbbbb;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  padding: 8px;
  transition: 0.3s;
  display: inline-block;
  img {
    transition: 0.3s;
    width: 100%;
    margin: 0;
  }
  &:hover {
    transform: scale(1.15);
  }

  &:hover img {
    transform: scale(0.9);
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            social {
              title
              icon
              link
            }
          }
        }
      }
    `}
    render={data => (
      <SocialWrapper>
        <br />
        <h1>Follow me:</h1>
        {data.site.siteMetadata.social.map(item => (
          <SocialIcon
            key={item.title}
            className={`${item.icon}--hover`}
            href={item.link}
            title={`${item.title} - ${data.site.siteMetadata.title}`}
            target="_blank"
          >
            <img
              alt={item.title}
              src={item.icon === 'dev' ? 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg' : `https://icongr.am/fontawesome/${item.icon}.svg?color=ffffff`}
            />
          </SocialIcon>
        ))}
        <br />
      </SocialWrapper>
    )}
  />
)
