import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { media } from '../styles'
import { Wrapper } from './Wrapper'
import { getTagInfoSelected } from '../helpers/tags.helpers'

export type TagsSectionProps = {
  tags: any[]
  title?: string
  selectedSlug?: string
}

export function TagsSection({ tags, title = 'TAGS: ', selectedSlug }: TagsSectionProps) {
  const selectedInfo = getTagInfoSelected(selectedSlug)
  return (
    <Wrapper id="post_tags" maxWidth={824} display="auto" paddingLeft={12} paddingRight={12}>
      <hr />
      <Title>{title}</Title>
      {tags.map(tag => (
        <Tag
          key={tag}
          to={`/blog/tags/${tag.node.slug}`}
          style={
            selectedSlug === tag.node.slug
              ? {
                  backgroundColor: selectedInfo.color,
                  color: selectedInfo.textColor,
                  border: `2px solid ${selectedInfo.color}`,
                }
              : {}
          }
        >
          {tag.node.title}
          {tag.node.postCount ? ` (${tag.node.postCount})` : ''}
        </Tag>
      ))}
      <hr
        style={{
          marginTop: '23px',
        }}
      />
    </Wrapper>
  )
}

const Tag = styled(Link)`
  background: #fff;
  display: inline-block;
  background: #fff;
  padding: 0 0.9em;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 23px;
  color: #333;
  border-radius: 4px;
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
