import styled from 'styled-components'
import omit from 'lodash/omit'

type WrapperProps = Record<string, any> & { styles: Record<string, any> }

export const Wrapper = styled.div<WrapperProps>(props => {
  const { styles, ...styleProps } = omit(props, [
    'children',
    'theme',
    'id',
    'className',
    'styles',
    'key',
  ])

  return {
    display: 'flex',
    alignItems: props.alignItems ?? 'center',
    flexDirection: props.flexDirection ?? 'row',
    justifyContent: props.justifyContent ?? 'left',
    maxWidth: props.maxWidth ?? '1160px',
    flexWrap: props.wrap ? 'wrap' : 'inherit',
    height: '100%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    ...styles,
    ...styleProps,
  }
})
