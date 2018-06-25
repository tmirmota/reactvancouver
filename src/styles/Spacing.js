import { Layout } from 'styles'
import { css } from 'emotion'

const sizingMap = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
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

const Spacing = {}

Object.entries(sizingMap).forEach(([num, size]) => {
  Object.entries(spacingMap).forEach(([key, value]) => {
    const style = []

    if (Array.isArray(value)) {
      for (let obj in value) {
        style.push({ [obj.cssName]: Layout.calcSpace(size) })
      }
    } else {
      style.push({ [value.cssName]: Layout.calcSpace(size) })
    }
    Spacing[key + num] = css({ [value.cssName]: Layout.calcSpace(size) })
  })
})

export default Spacing
