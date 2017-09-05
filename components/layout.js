import Link from 'next/Link'
import Head from 'next/Head'

import {
  MuiThemeProvider,
  createMuiTheme,
  createPalette,
  createTypography
} from 'material-ui/styles'

let theme = createMuiTheme()

const typography = createTypography(theme.palette, {
  // System font
  fontFamily:
    '-apple-system,system-ui,BlinkMacSystemFont,' +
    '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
})

theme = {
  ...theme,
  palette: createPalette({
    ...theme.palette,
    primary: pink
    // secondary: green['A400'],
  }),
  typography: {
    ...typography,
    display3: {
      ...typography.display3,
      textTransform: 'uppercase',
      color: '#FFFFFF',
      fontWeight: 100,
      fontSize: '48px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px'
      }
    },
    display1: {
      ...typography.display1,
      color: '#F5F5F5',
      fontWeight: 300,
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        lineHeight: '10px'
      }
    },
    headline: {
      ...typography.headline,
      textTransform: 'uppercase',
      color: '#F5F5F5'
    },
    caption: {
      ...typography.caption,
      color: '#F5F5F5',
      position: 'fixed',
      bottom: '20px',
      right: '20px'
    }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        margin: '10px'
      }
    }
  }
}

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
        crossorigin="anonymous"
      />

      {/* Font Awesome Icons */}
      <script src="https://use.fontawesome.com/003c3f5408.js" />

      {/* Google Roboto Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    <header />

    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>

    <footer />
    {/* Picatic Anywhere */}
    <script
      src="https://widget.picatic.com/latest/js/embed.min.js"
      id="picatic-widget-script"
      async
    />
  </div>
)
