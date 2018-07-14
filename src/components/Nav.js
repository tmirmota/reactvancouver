import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { RVButton, RVNav, RVLogo, RVLink } from 'components'
import { Colors } from 'styles'

const styles = {
  nav: props =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      height: props.height || '4rem',
      zIndex: '100',
      a: {
        color:
          (props.theme === 'light' && Colors.theme.primary) ||
          (props.theme === 'dark' && Colors.grey.white),
      },
    }),
}

const NavLogo = ({ navigate, title }) => (
  <RVLogo
    inline
    itemsCenter
    style={{ height: '100%' }}
    navigate={navigate}
    title={title}
  />
)
const NavLink = ({ navigate, children }) => (
  <RVLink pr2 inline itemsCenter style={{ height: '100%' }} navigate={navigate}>
    {children}
  </RVLink>
)

const Nav = ({ siteTitle, className }) => {
  return (
    <RVNav className={className}>
      <section>
        <NavLogo title={siteTitle} navigate="/" />
      </section>
      <section>
        <NavLink navigate="/events">Events</NavLink>
        <NavLink navigate="/speakers">Speakers</NavLink>
        <NavLink navigate="/jobs">Jobs</NavLink>
        <RVButton navigate="/contact-us">Get Involved</RVButton>
      </section>
    </RVNav>
  )
}
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

export default styled(Nav)(styles.nav)
