import { css } from 'emotion'
import Layout from './Layout'
import Colors from './Colors'
import Shadows from './Shadows'

export const base = css({
  margin: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: Colors.theme.primary,
  background: Colors.theme.primary,
  color: Colors.grey.white,
  outline: 'none',
})

export const outline = css({
  backgroundColor: 'transparent',
  borderColor: Colors.theme.primary,
  color: Colors.theme.primary,
})

export const link = css({
  backgroundColor: Colors.grey.light,
  borderWidth: 0,
  color: Colors.theme.primary,
  fontStyle: 'italic',
  textTransform: 'none',
  outline: 'none',
})

export const halo = css({
  boxShadow: Shadows.halo,
})

const calcSize = size => {
  switch (size) {
    case 'small':
      return css({
        height: Layout.calcSpace(4),
        borderRadius: Layout.calcSpace(4 / 2),
      })
    case 'medium':
      return css({
        height: Layout.calcSpace(6),
        borderRadius: Layout.calcSpace(6 / 2),
      })
    case 'large':
      return css({
        height: Layout.calcSpace(8),
        borderRadius: Layout.calcSpace(8 / 2),
      })
    default:
      return css({
        height: Layout.calcSpace(4),
        borderRadius: Layout.calcSpace(4 / 2),
      })
  }
}

export const small = calcSize('small')
export const medium = calcSize('medium')
export const large = calcSize('large')

export default {
  base,
  small,
  medium,
  large,
  outline,
  link,
  halo,
}
