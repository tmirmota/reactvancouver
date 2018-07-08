/* eslint-disable no-dupe-keys*/
import { css } from 'react-emotion'
import { Colors, Layout } from 'styles'
import background from './background.jpg'
export const heroStyles = props =>
  css({
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  })

export const backgroundStyles = css({
  background: Colors.theme.secondary,
  background: Colors.gradient.dark,
  width: '100%',
  height: '100%',
})

export const titleStyles = css({
  color: Colors.grey.white,
})

export const descriptionStyles = css({
  color: Colors.grey.white,
})
