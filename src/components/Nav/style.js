import { css } from 'react-emotion'
import { Colors } from 'styles'
export const navStyles = props =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    height: props.height || '4rem',
    zIndex: '100',
    a: {
      color:
        (props.theme === 'light' && Colors.theme.primary) ||
        (props.theme === 'dark' && Colors.grey.white),
    },
  })
