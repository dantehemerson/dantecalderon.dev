import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { ITag, tags } from '../data/tags'

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 760px;
  @media (min-width: 992px) {
    max-width: 960px;
  }
`

const Item = styled(Link)`
  padding: 2px 7px;
  background: #f7f7f7;
  color: #6a6a6a;
  border-radius: 3px;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: inline-block;
  text-transform: capitalize;
  text-decoration: none !important;
  transition: 0.2s;
  transition-timing-function: ease-in;
  margin-right: 4px !important;
  &:hover {
    opacity: 0.88;
  }
`

export function Tags({ items }: { items: string[] }) {
  return (
    <Container>
      <List>
        {items.map(item => {
          const tagSlug = kebabCase(item.toLowerCase())
          const tagData: ITag = { title: item, slug: tagSlug, color: '#f7f7f7', textColor: '#6a6a6a', ...tags[tagSlug] }
          return  <Item to={`/blog/tags/${tagData.slug}`} style={{
            backgroundColor: tagData.color,
            color: tagData.textColor
          }}>{tagData.title}</Item>
        })}
      </List>
    </Container>
  )
}
