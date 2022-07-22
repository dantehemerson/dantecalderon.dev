import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateTagInfo } from '../helpers/generate-tag-info.helper'

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
  min-width: 32px;
  text-align: center;
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

export function Tags({ items = [] }: { items: string[] }) {
  return (
    <Container>
      <List>
        {items.map(item => {
          const tagData = generateTagInfo(item)
          return (
            <Item
              key={tagData.slug}
              to={`/blog/tags/${tagData.slug}`}
              style={{
                backgroundColor: tagData.color,
                color: tagData.textColor,
              }}
            >
              {tagData.title}
            </Item>
          )
        })}
      </List>
    </Container>
  )
}
