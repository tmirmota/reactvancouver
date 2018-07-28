import React from 'react'
import { css } from 'react-emotion'
import classNames from 'classnames'
import { RVBox } from 'components'
import { Layout } from 'styles'
import { breakpoints } from 'styles/Layout'
import { injectStyles } from 'utils'

const RVGrid = ({
  className: classNameProp,
  gridTemplateColumns,
  ...otherProps
}) => {
  const className = classNames(
    Layout.grid.root,
    // TODO: Remove class creation in render
    css(breakpoints({ gridTemplateColumns })),
    classNameProp
  )

  return <RVBox className={className} {...otherProps} />
}

export default injectStyles(Layout.grid)(RVGrid)
