import { css } from 'emotion'
import facepaint from 'facepaint'
import Colors from './Colors'
import * as Shadows from './Shadows'

export const rootFontSize = '16px'
export const maxWidth = '60rem' // 960px
export const step = 0.5 // 8px
export const radius = '6px'

export const breakpoints = facepaint([
  `@media(min-width: 420px)`,
  `@media(min-width: 920px)`,
  `@media(min-width: ${maxWidth})`,
])

export const container = css(
  {
    maxWidth,
    margin: '0 auto',
  },
  breakpoints({
    paddingLeft: [`2rem`, `2rem`, `0`],
    paddingRight: [`2rem`, `2rem`, `0`],
  })
)

export default {
  rootFontSize,
  maxWidth,
  radius,
  breakpoints,
  container,
  padding: css(
    breakpoints({
      paddingLeft: [`2rem`, `2rem`, 0],
      paddingRight: [`2rem`, `2rem`, 0],
    })
  ),
  grid: {
    root: css({
      display: 'grid',
      gridGap: '2rem',
    }),
    columns2: css(
      breakpoints({
        gridTemplateColumns: [
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ],
      })
    ),
    columns3: css(
      breakpoints({
        gridTemplateColumns: [
          'repeat(1, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
        ],
      })
    ),
    columns4: css(
      breakpoints({
        gridTemplateColumns: [
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
        ],
      })
    ),
  },
  card: css({
    borderRadius: radius,
    boxShadow: Shadows.shadow,
    border: Shadows.border,
    backgroundColor: Colors.grey.white,
  }),
  calcSpace: units => `${units * step}rem`,
}
