import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Nav, Footer } from 'components'
import styled from 'react-emotion'

// Global Styles
import './index.css'
import 'styles/Global'

const navHeight = '4rem'

const Main = styled.main({
  minHeight: `calc(100vh -${navHeight})`,
  marginTop: `-${navHeight}`,
})

const Layout = ({ children, title, description, keywords, theme }) => (
  <React.Fragment>
    <Helmet
      title={`${title} | React Vancouver`}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700,900"
        rel="stylesheet"
      />
    </Helmet>
    <Nav siteTitle={title} height={navHeight} theme={theme} />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
}

export default Layout
