import React from 'react'
import styled from 'styled-components'

import Item from './PortfolioItem'
import Wrapper from '../Wrapper'

export default props => (
  <Wrapper
    maxWidth='1000px'
    wrap>
    {
      props.posts.map(( { node }, index) => {
        return (
          <div className="Portfolio__item col-xs-12 col-sm-12 col-md-6" key={index}>
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
          </div>
        )
      })
    }
  </Wrapper>
)
