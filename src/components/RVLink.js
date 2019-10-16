import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { RVBox } from 'components'
import { Typography } from 'styles'

const RVLink = ({
  className,
  children,
  href,
  navigate,
  to,
  activeClassName,
  activeStyle,
  ...otherProps
}) => {
  if (href) {
    return (
      <RVBox
        tag="a"
        target="_blank"
        rel={'noopener referrer'}
        href={href}
        className={className}
        {...otherProps}
      >
        {children}
      </RVBox>
    )
  }
  if (navigate) {
    return (
      <RVBox {...otherProps}>
        <Link
          className={className}
          to={navigate}
        >
          {children}
        </Link>
      </RVBox>
    )
  }
  return (
    <RVBox {...otherProps}>
      <Link
        className={className}
        to={to}
        activeStyle={activeStyle}
        activeClassName={activeClassName}
      >
        {children}
      </Link>
    </RVBox>
  )
}

RVLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  navigate: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  activeStyle: PropTypes.object,
  activeClassName: PropTypes.string,
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
