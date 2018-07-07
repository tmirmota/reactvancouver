import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Nav, Footer } from 'components'

import './index.css'
import 'styles/Global'
import { container } from 'styles/Layout'
import styled from 'react-emotion'

const Container = styled.div(container)
const Layout = ({ children, title }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav siteTitle={title} />
    <Container>{children}</Container>
    <Footer />
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout
