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
  paddingLeft: Layout.calcSpace(4),
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

export const inputWrapper = css({
  background: Colors.grey.white,
  borderRadius: Layout.radius,
  flex: '1 1 auto',
  margin: Layout.calcSpace(1),
})

export const input = css(text, {
  backgroundColor: 'transparent',
  borderWidth: 2,
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderRadius: Layout.radius,
  boxSizing: 'border-box',
  display: 'block',
  outline: 'none',
  padding: `${Layout.calcSpace(2)} ${Layout.calcSpace(4)}`,
  resize: 'none',
  transition: `border-color 0.2s ease`,
  width: '100%',

  ':disabled': {
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
  ':hover': {
    borderColor: Colors.grey.calc(80),
  },
  ':focus, :active': {
    borderColor: Colors.theme.secondary,
  },
})

export default {
  label,
  placeholder,
  text,
  input,
  inputWrapper,
}
