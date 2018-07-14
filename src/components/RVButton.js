import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Buttons } from 'styles'
import { RVBox } from 'components'
import { injectStyles } from 'utils'

const RVButton = () => {
  const { className: classNameProp, ...otherProps } = this.props

  const className = classNames(Buttons.base, Buttons.medium, classNameProp)

  return <RVBox className={className} {...otherProps} />
}

RVButton.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

RVButton.defaultProps = {
  tag: 'button',
  type: 'button',
}

export default injectStyles(Buttons)(RVButton)
