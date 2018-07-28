import React from 'react'
import classNames from 'classnames'
import { RVBox } from 'components'
import { Layout } from 'styles'

const RVContainer = ({ className: classNameProp, ...otherProps }) => {
  const className = classNames(Layout.container, classNameProp)
  return <RVBox className={className} {...otherProps} />
}

export default RVContainer
