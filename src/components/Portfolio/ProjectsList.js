import React from 'react'
import styled from 'styled-components'

import Item from './PortfolioItem'
import { media } from '../../styles'

const Wrapper = styled.div`
  display: grid;
  max-width: 1080px;
  margin: 0 auto;
  grid-template-columns: minmax(min-content, 590px);
  justify-content: center;
  grid-gap: 30px;
  padding: 0 13px;
  ${media.md`
    grid-template-columns: 1fr 1fr;
  `};
`

export default props => (
  <Wrapper>
    {props.posts.map(({ node }, index) => {
      return (
        <Item
          data={{
            title: node.frontmatter.title,
            subtitle: node.frontmatter.subtitle,
            thumbnail: node.fields.image.childImageSharp.sizes,
            path: `/${node.fields.slug}`,
            tags: node.frontmatter.tags,
            repository: node.frontmatter.repository,
            website: node.frontmatter.website
          }}
          finished={node.frontmatter.finished}
        />
      )
    })}
  </Wrapper>
)
