import { Layout } from 'styles'
import { css } from 'emotion'

const space = size => {
  if (typeof size !== 'number') {
    return size
  }
  return Layout.calcSpace(size)
}

const sizingMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  8: 16,
  '-auto': 'auto',
}

const spacingMap = {
  m: { cssName: 'margin' },
  mx: [{ cssName: 'margin-left' }, { cssName: 'margin-right' }],
  my: [{ cssName: 'margin-top' }, { cssName: 'margin-bottom' }],
  ml: { cssName: 'margin-left' },
  mr: { cssName: 'margin-right' },
  mt: { cssName: 'margin-top' },
  mb: { cssName: 'margin-bottom' },

  p: { cssName: 'padding' },
  px: [{ cssName: 'padding-left' }, { cssName: 'padding-right' }],
  py: [{ cssName: 'padding-top' }, { cssName: 'padding-bottom' }],
  pl: { cssName: 'padding-left' },
  pr: { cssName: 'padding-right' },
  pt: { cssName: 'padding-top' },
  pb: { cssName: 'padding-bottom' },
}

const spacing = {}

Object.entries(sizingMap).forEach(([num, size]) => {
  Object.entries(spacingMap).forEach(([key, value]) => {
    const style = []

    if (Array.isArray(value)) {
      for (let obj of value) {
        style.push({ [obj.cssName]: space(size) })
      }
    } else {
      style.push({ [value.cssName]: space(size) })
    }
    spacing[key + num] = css(style)
  })
})

export default {
  ...spacing,
  flex: css({
    display: 'flex',
  }),
  inline: css({
    display: 'inline-flex',
  }),
  center: css({
    justifyContent: 'center',
  }),
  itemsCenter: css({
    alignItems: 'center',
  }),
  itemsBottom: css({
    alignItems: 'baseline',
  }),
  spaceAround: css({
    justifyContent: 'space-around',
  }),
  spaceEvenly: css({
    justifyContent: 'space-evenly',
  }),
  spaceBetween: css({
    justifyContent: 'space-between',
  }),
  alignRight: css({
    textAlign: 'right',
  }),
  alignCenter: css({
    textAlign: 'center',
  }),
}
