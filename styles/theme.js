import { createMuiTheme } from 'material-ui/styles'
import { pink } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: pink
    // secondary: green['A400'],
  },
  typography: {
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    display3: {
      textTransform: 'uppercase',
      color: '#FFFFFF',
      fontWeight: 100,
      fontSize: '48px'
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '18px'
      // }
    },
    display1: {
      color: '#F5F5F5',
      fontWeight: 300
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '14px',
      //   lineHeight: '10px'
      // }
    },
    headline: {
      textTransform: 'uppercase',
      color: '#F5F5F5'
    },
    caption: {
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
})

export default theme
