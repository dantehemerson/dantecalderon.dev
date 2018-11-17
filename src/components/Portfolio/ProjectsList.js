import React from 'react'
import styled from 'styled-components'

import Item from './PortfolioItem'
import Wrapper from '../Wrapper'

const ItemWrapper = styled.div`
  padding: 14px 14px !important;
`

export default props => (
  <Wrapper
    maxWidth='1080px'
    wrap className='center-sm start-md'>
    {
      props.posts.map(( { node }, index) => {
        return (
          <ItemWrapper className="col-xs-12 col-sm-11 col-md-6" key={index}>
            <Item
              data={
                {
                  title: node.frontmatter.title,
                  subtitle: node.frontmatter.subtitle,
                  thumbnail: node.fields.image.childImageSharp.sizes,
                  path: `/${node.frontmatter.path}`,
                  tags: node.frontmatter.tags,
                  repository: node.frontmatter.repository,
                  website: node.frontmatter.website
                }
              }/>
          </ItemWrapper>
        )
      })
    }
  </Wrapper>
)
