import React from 'react'
import Link from 'gatsby-link'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
  },
}

const Header = ({ siteTitle }) => (
  <header style={styles.header}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav style={styles.nav}>
      <Link to="/events">Events</Link>
      <Link to="/speakers">Speakers</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/">Get Involved</Link>
    </nav>
  </header>
)

export default Header
