import React from 'react'
import { Forms } from 'styles'
import classNames from 'classnames'

const RVInput = ({
  className: classNameProp,
  tag: Component,
  type,
  ...otherProps
}) => {
  const className = classNames([Forms.input, classNameProp])

  return (
    <div className={Forms.inputWrapper}>
      <Component type={type} className={className} {...otherProps} />
    </div>
  )
}

export default RVInput

RVInput.defaultProps = {
  type: 'text',
  tag: 'input',
}
