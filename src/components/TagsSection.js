import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

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
  padding: 1px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 30px;
  color: #333;
  border-radius: 0.5625rem;
  text-decoration: none;
  border: 2px solid #d6e0ef;
  margin-right: 5px;
  cursor: pointer;
`

const Title = styled.span`
  font-weight: 700;
  font-size: 15px;
  margin-right: 6px;
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
