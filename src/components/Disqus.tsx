import PropTypes from 'prop-types'
import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import styled from 'styled-components'
import {useSiteMetadata} from '../hooks/useSiteMetadata'

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`

const Disqus = ({ title, path }) => {
  const {
    siteMetadata: { disqusShortname, siteUrl },
  } = useSiteMetadata()
  const url = `${siteUrl}/${path}`

  return (
    <Container>
      <ReactDisqusComments shortname={disqusShortname} identifier={path} title={title} url={url} />
    </Container>
  )
}

Disqus.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Disqus
