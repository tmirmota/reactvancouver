import React from 'react'
import { RVBox } from 'components'
import { Layout } from 'styles'
import classNames from 'classnames'

const RVContainer = ({ className: classNameProp, ...otherProps }) => {
  const className = classNames(Layout.container, classNameProp)
  return <RVBox className={className} {...otherProps} />
}

export default RVContainer
