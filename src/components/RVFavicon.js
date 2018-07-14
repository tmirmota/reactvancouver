import React from 'react'
import Img from 'gatsby-image'
import { Images } from 'styles'
import { RVBox } from 'components'
import classNames from 'classnames'

export default ({ className: classNameProp, ...otherProps }) => {
  const className = classNames(Images.favicon, classNameProp)

  return <RVBox tag={Img} className={className} {...otherProps} />
}
