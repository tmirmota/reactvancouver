import React from 'react'
import PropTypes from 'prop-types'
import { injectStyles } from 'utils'
import { Box } from 'styles'

const RVBox = ({ boxRef, tag: Component, ...otherProps }) => {
  return <Component {...otherProps} ref={boxRef} />
}

RVBox.propTypes = {
  boxRef: PropTypes.func,
  tag: PropTypes.oneOf(PropTypes.string, PropTypes.element).isRequired,
}

RVBox.defaultProps = {
  tag: 'div',
}

export default injectStyles(Box)(RVBox)
