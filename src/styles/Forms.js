import { css } from 'emotion'
import Layout from './Layout'
import Colors from './Colors'
import Typography from './Typography'

export const label = css({
  fontFamily: Typography.font.base,
  color: Colors.theme.primary,
  fontSize: Layout.calcSpace(2),
  fontWeight: Typography.font.weight.bold,
  margin: `${Layout.calcSpace(2)} 0 ${Layout.calcSpace(1)} 0`,
})

export const placeholder = css({
  fontFamily: Typography.font.base,
  color: Colors.grey.calc(70),
  fontSize: Layout.calcSpace(2),
  fontWeight: Typography.font.weight.regular,
  margin: `${Layout.calcSpace(2)} 0 ${Layout.calcSpace(1)} 0`,
})

export const text = css({
  fontFamily: Typography.font.base,
  color: Colors.grey.calc(70),
  fontSize: Layout.calcSpace(2),
  fontWeight: Typography.font.weight.bold,
})

export const input = css(text, {
  backgroundColor: 'transparent',
  border: 'none',
  boxSizing: 'border-box',
  margin: `0 0 ${Layout.calcSpace(2)} 0`,
  padding: `${Layout.calcSpace(2)} ${Layout.calcSpace(4)}`,
  transition: `border-color 0.2s ease`,

  ':disabled': {
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
})

export default {
  label,
  placeholder,
}
