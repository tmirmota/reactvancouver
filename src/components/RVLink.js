import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { RVBox } from 'components'
import { Typography } from 'styles'

const RVLink = ({ className, navigate, children, ...otherProps }) => (
  <RVBox {...otherProps}>
    <Link className={className} to={navigate}>
      {children}
    </Link>
  </RVBox>
)

RVLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  navigate: PropTypes.string,
}

export default styled(RVLink)(
  props => (
    Typography.link,
    {
      cursor: props.disabled && 'default',
      color: props.color && props.color,
    }
  )
)
