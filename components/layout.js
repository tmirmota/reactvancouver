import Head from 'next/head'
import Link from 'next/link'
import stylesheet from 'styles/index.scss'
import theme from 'styles/theme.js'

import { MuiThemeProvider } from 'material-ui/styles'

export default ({ children, title = 'React Vancouver' }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{title}</title>

      {/* Bootstrap 4 */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossOrigin="anonymous"
      />

      {/* Font Awesome Icons */}
      <script src="https://use.fontawesome.com/003c3f5408.js" />

      {/* Google Roboto Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>

    <footer />
  </div>
)
