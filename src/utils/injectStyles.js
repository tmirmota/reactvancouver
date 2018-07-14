import React from 'react'
import classNames from 'classnames'

export default styles => Component => {
  const { className: classNameProp, ...otherProps } = this.props

  const restProps = {}
  const componentClasses = []

  Object.keys(otherProps).map(key => {
    if (otherProps[key] === true && styles[key]) {
      componentClasses.push(styles[key])
    } else {
      restProps[key] = otherProps[key]
    }
  })

  const className = classNames(...componentClasses, classNameProp)

  return <Component className={className} {...restProps} />
}
