import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { RVButton, RVBox, RVLogo, RVLink } from 'components'
import { Colors } from 'styles'

const styles = {
  header: props =>
    css({
      flexWrap: 'wrap',
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
    <RVBox tag="header" container flex spaceBetween pt2 className={className}>
      <section>
        <NavLogo title={siteTitle} navigate="/" />
      </section>
      <nav>
        <NavLink navigate="/events">Events</NavLink>
        <NavLink navigate="/speakers">Speakers</NavLink>
        <NavLink navigate="/jobs">Jobs</NavLink>
        <NavLink navigate="/#contact-us">
          <RVButton>Get Involved</RVButton>
        </NavLink>
      </nav>
    </RVBox>
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

export default styled(Nav)(styles.header)
