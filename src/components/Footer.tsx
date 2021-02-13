import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { media } from '../styles'

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
  background: #fafafa;
  border-top: 1px solid #f3f3f3;
  * {
    margin: 0;
    padding: 0;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.a`
  margin: 0 15px;
  img {
    width: 27px;
  }
`

const Copy = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #656565;
  text-align: center;
  .heart {
    color: #ff7763;
  }

  .copytext {
    display: block;
    padding: 10px 0 5px;
    ${media.sm`
      display: inline-block;
    `};
  }

  a {
    color: #282a2d;
    text-decoration: none;
  }
`

export default props => {
  const {
    siteMetadata: { title, social },
  } = useSiteMetadata()

  return (
    <Container>
      <Social>
        {social.slice(0, 4).map(item => (
          <Icon key={item.title} target="_blank" href={item.link} rel="noopener">
            <img
              alt={`${item.title} - ${title}`}
              src={
                item.icon === 'dev'
                  ? 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg'
                  : `https://icongr.am/fontawesome/${item.icon}.svg?size=20&color=282a2d`
              }
            />
          </Icon>
        ))}
      </Social>
      <Copy>
        <span className="copytext">© {new Date().getFullYear()} - All rights reserved.</span> Made
        with <span className="heart">❤</span> by{' '}
        <Link to="/#a-little-bit-about-me" target="_blank" rel="noopener">
          {title}
        </Link>
      </Copy>
    </Container>
  )
}
