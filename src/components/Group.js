import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Group = styled.div`
  background: #333;
  margin: 15px 0;
  border-radius: 5px;
`

const Title = styled.p`
  background: #555;
  color: #ccc;
  display: inline-block;
  width: 140px;
  font-size: 12px;
  border-radius: 0 0 3px 3px;
  padding: 10px 0;
  margin: 0;
  line-height: 0;
  text-align: center;
  top: -2px;
  left: 15px;
  position: relative;
`

const ItemsWrapper = styled.div`
  display: flex;
  padding: 20px 0 0px 0;
  flex-wrap: wrap;
`

export default ({ group }) => (
  <Group>
    <Title>{group.title}</Title>
    <ItemsWrapper>
      {group.items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ItemsWrapper>
  </Group>
)
