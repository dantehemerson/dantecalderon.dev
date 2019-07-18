import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'left')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1160px')};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'inherit')};
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
