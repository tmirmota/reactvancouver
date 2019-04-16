import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Nav, Footer } from 'components'
import styled from 'react-emotion'

// Global Styles
import './index.css'
import 'styles/Global'

// TODO: Remove if manifest generates favicons
import favicon from '../../static/favicon.png'

const navHeight = '6rem'

const Main = styled.main({
  minHeight: `calc(100vh - ${navHeight})`,
  marginTop: `-${navHeight}`,
})

const Layout = ({
  children,
  title = '',
  description = '',
  keywords = '',
  theme,
}) => (
  <React.Fragment>
    <Helmet
      title={`${title && `${title} | `}React Vancouver`}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        {
          name: 'google-site-verification',
          content: 'qawJEhyNW_Ux370OkBi5pVNesHU4mdxd722lgU9ynn4',
        },
        {
          name: 'google-site-verification',
          content: 'EdhKuuz7qIqzKK1VLfkoTKOeoUyHNxlw2bYmEoEYSoY',
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700,900"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <script
        async
        src="https://widget.picatic.com/latest/js/embed.min.js"
        id="picatic-widget-script"
      />
      <script src="https://embed.small.chat/T0K6DLYBBGHLCY0M6X.js" async />
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
