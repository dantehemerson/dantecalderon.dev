import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { media } from '../styles'

const Container = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Tag = styled(Link)`
  background: #fff;
  display: inline-block;
  background: #fff;
  padding: 0 0.9em;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 23px;
  color: #333;
  border-radius: 0.5625rem;
  text-decoration: none;
  border: 2px solid #d6e0ef;
  margin: 2px 2px;
  cursor: pointer;
  transition: 0.3s;
  ${media.sm`
    line-height: 30px;
    font-size: 0.8rem;
    margin: 2px 4px;
  `}

  &:hover {
    background-color: #f8f8f8;
  }
`

const Title = styled.span`
  font-weight: 700;
  font-size: 13px;
  margin-right: 6px;
  ${media.sm`
    font-size: 15px;
  `}
`
const TagsSection = ({ tags }) => {
  return (
    <Container>
      <hr />
      <Title>TAGS:</Title>
      {tags.map(tag => (
        <Tag to={`/blog/tags/${kebabCase(tag.toLowerCase())}`}>{tag}</Tag>
      ))}
      <hr
        style={{
          marginTop: '23px'
        }}
      />
    </Container>
  )
}

export default TagsSection
