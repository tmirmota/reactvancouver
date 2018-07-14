import React from 'react'
import { Layout } from 'styles'
import { css } from 'react-emotion'
import { RVBox } from 'components'
import { breakpoints } from 'styles/Layout'
import { injectStyles } from 'utils'
import classNames from 'classnames'

const RVGrid = ({
  className: classNameProp,
  gridTemplateColumns,
  ...otherProps
}) => {
  const className = classNames(
    Layout.grid.root,
    // TODO: Remove class creation in render
    css(breakpoints(gridTemplateColumns)),
    classNameProp
  )

  return <RVBox className={className} {...otherProps} />
}

export default injectStyles(Layout.grid)(RVGrid)
