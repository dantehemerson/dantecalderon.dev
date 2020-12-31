import React from 'react'
import styled from 'styled-components'

const InProcess = styled.div`
  width: 100px;
  height: 22px;
  margin-right: 2px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    padding: 0;
  }
  background: #2fd869;
  img {
    width: 14px;
    height: 14px;
    margin: 0;
    margin-right: 6px;
  }
`

export default props => (
  <InProcess title="I'm still working on it...">
    <img alt="In Progress" src="https://icongr.am/entypo/circular-graph.svg?color=ffffff" />
    <span>In Progress</span>
  </InProcess>
)
