import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

type ShareProps = {
  title: string
  path?: string
}

export function Share({ title, path }: ShareProps) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query ShareComponentQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const url = `${siteUrl}/${path}`

  return (
    <Container>
      <ShareTitle>Share:</ShareTitle>
      <Button
        type="twitter"
        href={`https://twitter.com/intent/tweet?text=${title} by Dante Calderón(@dantehemerson) ${url}`}
        title="Share on Twitter"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
          title="Share on Twitter"
          alt="img"
        />
      </Button>
      <Button
        type="linkedin"
        rel="noopener"
        href={`http://www.linkedin.com/shareArticle?url=${url}&isFramed=true`}
        title="Share on Linkedin"
        target="_blank"
      >
        <img
          src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
          title="Share on Linkedin"
          alt="img"
        />
      </Button>
    </Container>
  )
}

const Button = styled.a`
  margin: 4px !important;
  background: #caced2;
  border-radius: 4px;
  padding: 0em 0.2em;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #a9adb1;
  }
  img {
    width: 22px;
    height: 84%;
    margin: 0;
    position: relative;
    top: 2px;
  }
`

const Container = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
  padding-bottom: 15px;
  justify-content: center;
`

const ShareTitle = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 0;
  margin-bottom: 20px;
`
