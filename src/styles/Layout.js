import { css } from 'emotion'
import facepaint from 'facepaint'
import Colors from './Colors'
import Shadows from './Shadows'

const rootFontSize = '16px'
const maxWidth = '80rem' // 1280px
const step = 0.5 // 8px
const radius = '6px'

const mq = facepaint([
  `@media(min-width: 420px)`,
  `@media(min-width: 920px)`,
  `@media(min-width: ${maxWidth})`,
])

export default {
  rootFontSize,
  maxWidth,
  radius,
  breakpoints: mq,
  container: css(
    {
      maxWidth,
      margin: '0 auto',
    },
    mq({
      padding: [`0 2rem`, `0 2rem`, `0`],
    })
  ),
  padding: css(
    mq({
      paddingLeft: [`2rem`, `2rem`, 0],
      paddingRight: [`2rem`, `2rem`, 0],
    })
  ),
  grid: css(
    {
      display: 'grid',
      gridGap: '2rem',
    },
    mq({
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ],
    })
  ),
  card: css({
    borderRadius: radius,
    boxShadow: Shadows.boxShadow,
    border: Shadows.border,
    backgroundColor: Colors.grey.white,
  }),
  calcSpace: units => `${units * step}rem`,
}
