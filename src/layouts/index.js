import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Nav, Footer } from 'components'

import './index.css'
import 'styles/Global'
import { container } from 'styles/Layout'
import styled from 'react-emotion'

const Container = styled.div(container)
const Layout = ({ children, title }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Helmet>
    <Nav siteTitle={title} />
    <Container>{children}</Container>
    <Footer />
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout
