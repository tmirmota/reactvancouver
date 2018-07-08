import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { RVButton, RVNav, RVLogo, RVLink } from 'components'
import { navStyles } from './style'
import Link from 'gatsby-link'

const Nav = ({ siteTitle, className }) => {
  return (
    <RVNav py2 className={className}>
      <section>
        <RVLogo
          inline
          itemsCenter
          style={{ height: '100%' }}
          navigate="/"
          title={siteTitle}
        />
      </section>
      <section>
        <RVLink pr2 inline navigate="/events">
          Events
        </RVLink>
        <RVLink pr2 inline navigate="/speakers">
          Speakers
        </RVLink>
        <RVLink pr2 inline navigate="/jobs">
          Jobs
        </RVLink>
        <Link to="/contact-us">
          <RVButton>Get Involved</RVButton>
        </Link>
      </section>
    </RVNav>
  )
}
Nav.propTypes = {
  siteTitle: PropTypes.string,
  className: PropTypes.string,
  /*
    [default] To use on light backgrounds
  */
  light: PropTypes.bool,
  /*
     To use on dark backgrounds
  */
  dark: PropTypes.bool,
}

export default styled(Nav)(navStyles)
