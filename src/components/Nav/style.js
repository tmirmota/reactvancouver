import { css } from 'react-emotion'
import { Colors } from 'styles'
export const navStyles = props =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    a: {
      color:
        (props.light && Colors.theme.primary) ||
        (props.dark && Colors.grey.white),
    },
  })
