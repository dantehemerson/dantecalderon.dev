import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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
const StyledIcon = styled.a`
  padding: 10px;
  margin: 0 10px;
  padding: 9px 9px;
  border-radius: 4px;
  opacity: 1;
  display: inline-flex;
  img {
    margin-bottom: 0;
    width: 21px;
    height: 21px;
  }
`

const ShareTitle = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 0;
  margin-bottom: 20px;
`

const Icon = ({ title, url, icon, ...props }) => (
  <StyledIcon {...props} href={url} target="_blank" rel="noopener noreferrer" data-size="large">
    <img alt={title} title={title} src={icon} />
  </StyledIcon>
)

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
      <Icon
        className="twitter-color twitter-color--hover-shadow"
        title="Share on Twitter"
        url={`https://twitter.com/intent/tweet?text=${title} by Dante Calderón(@dantehemerson) ${url}`}
        icon="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
      />
      <Icon
        className="facebook-color facebook-color--hover-shadow"
        title="Share on Facebook"
        url={`https://www.facebook.com/sharer/sharer.php?app_id=2209722672595950&sdk=joey&u=${url}`}
        icon="https://icongr.am/fontawesome/facebook.svg?color=ffffff"
      />
      <Icon
        className="linkedin-color linkedin-color--hover-shadow"
        title="Share on Linkedin"
        url={`http://www.linkedin.com/shareArticle?url=${url}&isFramed=true`}
        icon="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
      />
    </Container>
  )
}

Share.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Share
