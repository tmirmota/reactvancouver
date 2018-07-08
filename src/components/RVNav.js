import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { RVBox } from 'components'
import { Layout } from 'styles'

//TODO: Add theme provider
const RVNav = ({ children, className, ...otherProps }) => {
  return (
    <RVBox tag="header" {...otherProps}>
      <nav className={className}>{children}</nav>
    </RVBox>
  )
}

RVNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  // color: PropTypes.string, //TODO: Goes into theme provider
}

export default styled(RVNav)(Layout.container)
