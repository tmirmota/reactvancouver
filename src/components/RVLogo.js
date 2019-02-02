import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { RVText } from 'components'
import { Typography } from 'styles'

const RVLogo = ({ className, to, navigate, ...otherProps }) => (
  <RVText subheading style={{ margin: 0 }} {...otherProps}>
    <Link className={className} to={to || navigate}>
      React Vancouver
    </Link>
  </RVText>
)

RVLogo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  navigate: PropTypes.string,
  to: PropTypes.string,
}

export default styled(RVLogo)(
  props => (
    Typography.link,
    {
      cursor: props.disabled && 'default',
      color: props.color && props.color,
    }
  )
)
