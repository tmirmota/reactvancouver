import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'styles'
import { injectStyles } from 'utils'

const RVBox = ({ boxRef, tag: Component, ...otherProps }) => (
  <Component {...otherProps} ref={boxRef} />
)

RVBox.propTypes = {
  boxRef: PropTypes.func,
  tag: PropTypes.string.isRequired,
}

RVBox.defaultProps = {
  tag: 'div',
}

export default injectStyles(Box)(RVBox)
