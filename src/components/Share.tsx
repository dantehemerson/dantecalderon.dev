import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const Button = styled(AwesomeButton)`
  margin: 14px 3px !important;
  border: 0 !important;
  .aws-btn__content {
    padding: 0 14px !important;
    & > span {
      height: 100%;
    }
  }
  img {
    width: 22px;
    height: 88%;
    margin: 0;
    border: 0px solid !important;
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

const Share = ({ title, path }) => {
  const { siteUrl } = _.get(
    useStaticQuery(graphql`
      query ShareComponentQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `),
    'site.siteMetadata'
  )

  const url = `${siteUrl}/${path}`

  return (
    <Container>
      <ShareTitle>Share it:</ShareTitle>
      <Button
        type="twitter"
        size="small"
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
        size="small"
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

Share.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Share
