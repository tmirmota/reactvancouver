import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { RVButton, RVBox, RVLogo, RVLink } from 'components'
import { Colors } from 'styles'
import { darken } from 'polished'

const styles = {
  header: props =>
    css({
      height: props.height || '4rem',
      zIndex: '100',
      '@media (max-width: 420px)': {
        justifyContent: 'center',
      },
      nav: {
        '@media (max-width: 420px)': {
          display: 'flex',
          justifyContent: 'center',
          button: {
            display: 'none',
          },
        },
      },
      a: {
        color:
          (props.theme === 'light' && Colors.theme.primary) ||
          (props.theme === 'dark' && Colors.grey.white),
      },
    }),
}

const NavLogo = ({ navigate, title }) => (
  <RVLogo inline itemsCenter navigate={navigate} title={title} />
)
const NavLink = ({ navigate, children }) => (
  <RVLink
    pl2
    inline
    itemsCenter
    navigate={navigate}
    activeStyle={{
      color: darken(0.2, Colors.theme.primary),
    }}
  >
    {children}
  </RVLink>
)

const Nav = ({ siteTitle, className }) => (
  <RVBox
    tag="header"
    container
    flex
    flexWrap
    spaceBetween
    itemsCenter
    className={className}
  >
    <section>
      <NavLogo title={siteTitle} navigate="/" />
    </section>
    <RVBox tag="nav" flex itemsStretch>
      <NavLink navigate="/events">Events</NavLink>
      <NavLink navigate="/photos">Photos</NavLink>
      <NavLink navigate="/speakers">Speakers</NavLink>
      <NavLink navigate="/jobs">Jobs</NavLink>
      <NavLink navigate="/#contact-us">
        <RVButton>Get Involved</RVButton>
      </NavLink>
    </RVBox>
  </RVBox>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
  className: PropTypes.string,
  /*
    light: [default] to use on light backgrounds
    dark: to use on dark backgrounds
 */
  theme: PropTypes.oneOf(['light', 'dark']),
  /*
    Navigation height is offset on <Main /> in the layout
  */
  height: PropTypes.string,
}

export default styled(Nav)(styles.header)
