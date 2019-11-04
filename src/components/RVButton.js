import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { RVBox } from 'components'
import { Buttons } from 'styles'
import { injectStyles } from 'utils'

const RVButton = ({ className: classNameProp, decorative, tag, type, ...otherProps }) => {
  const className = classNames(Buttons.base, Buttons.medium, classNameProp)

  return (
    <RVBox
      className={className}
      tag={ decorative ? 'div' : tag }
      type={ decorative ? null : type }
      {...otherProps}
    />
  )
}

RVButton.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string,
  decorative: PropTypes.bool.isRequired,
}

RVButton.defaultProps = {
  tag: 'button',
  type: 'button',
  decorative: false,
}

export default injectStyles(Buttons)(RVButton)
