import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`

const Disqus = ({ title, path }) => {
  const { disqusShortname, siteUrl } = _.get(
    useStaticQuery(graphql`
      query DisqusQuery {
        site {
          siteMetadata {
            disqusShortname
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
      <ReactDisqusComments shortname={disqusShortname} identifier={path} title={title} url={url} />
    </Container>
  )
}

Disqus.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Disqus
