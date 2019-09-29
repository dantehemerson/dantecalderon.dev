import { graphql, Link, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
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
  color: #848687;
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
  const { title, subtitle, social } = _.get(
    useStaticQuery(graphql`
      query FooterQuery {
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
    `),
    'site.siteMetadata'
  )

  return (
    <Container>
      <Social>
        {social.slice(0, 4).map(item => (
          <Icon key={item.title} target="_blank" href={item.link}>
            <img
              alt={`${item.title} - ${title}`}
              src={`https://icongr.am/fontawesome/${item.icon}.svg?size=20&color=282a2d`}
            />
          </Icon>
        ))}
      </Social>
      <Copy>
        <span className="copytext">© {new Date().getFullYear()} - All rights reserved.</span> Made
        with <span className="heart">❤</span> by{' '}
        <Link to="/about" target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </Copy>
    </Container>
  )
}
