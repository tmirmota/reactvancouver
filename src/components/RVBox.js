import React from 'react'
import PropTypes from 'prop-types'
import { injectStyles } from 'utils'
import { Box } from 'styles'

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
