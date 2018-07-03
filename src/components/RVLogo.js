import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { RVBox } from 'components'
import { Typography } from 'styles'

const RVLogo = ({ className, navigate, title, ...otherProps }) => (
  <RVBox {...otherProps}>
    <Link className={className} to={navigate} title={title}>
      ReactVancouver
    </Link>
  </RVBox>
)

RVLogo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  navigate: PropTypes.string,
  title: PropTypes.string,
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
