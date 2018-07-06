import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import Nav from '../components/Nav'
import './index.css'
import 'styles/Global'
import { container } from 'styles/Layout'
import styled from 'react-emotion'

<<<<<<< HEAD
const Layout = ({ children, title }) => (
=======
const Container = styled.div(container)
const Layout = ({ children, data }) => (
>>>>>>> ria-styles
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
<<<<<<< HEAD
    <Header siteTitle={title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
=======
    <Nav siteTitle={data.site.siteMetadata.title} />
    <Container>{children()}</Container>
>>>>>>> ria-styles
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
