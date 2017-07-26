import React, { Component } from 'react'
import moment from 'moment'
import './App.css'

// Material UI Components
import {
  MuiThemeProvider,
  createMuiTheme,
  createPalette,
  createTypography,
} from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { indigo, pink } from 'material-ui/colors'

// Components
import Nav from './components/Nav'

let theme = createMuiTheme()

const typography = createTypography(theme.palette, {
  // System font
  fontFamily:
    '-apple-system,system-ui,BlinkMacSystemFont,' +
    '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
})

theme = {
  ...theme,
  palette: createPalette({
    ...theme.palette,
    primary: pink,
    // secondary: green['A400'],
  }),
  typography: {
    ...typography,
    display3: {
      ...typography.display3,
      textTransform: 'uppercase',
      color: '#FFFFFF',
      fontWeight: 100,
    },
    display1: {
      ...typography.display1,
      color: '#F5F5F5',
      fontWeight: 300,
    },
    headline: {
      ...typography.headline,
      textTransform: 'uppercase',
      color: '#F5F5F5',
    },
    caption: {
      ...typography.caption,
      color: '#F5F5F5',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        margin: '10px',
      }
    }
  }
}

// Picatic API Key
const PICATIC_API_KEY = 'sk_live_e53cbafd83670003d7de88169eb50851'

// Picatic API Domain
const picaticDomain = 'https://api.picatic.com/v2'

// Picatic Page Restrictions
const picaticLimit = '&page[limit]=2&page[offset]=0'

// Picatic Header
const picaticHeader = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${PICATIC_API_KEY}`,
  },
}

class App extends Component {
  state = {
    backgroundUrl: null,
    picaticId: 664654,
    event: null,
    eventId: 117480,
    tickets: [],
  }
  componentWillMount() {
    this.getRandomPic()
    this.getEvent()
    this.getEventTickets()
  }

  getPicaticId = () => {
    // User Id Endpoint
    const url = `${picaticDomain}/user/me`

    // Fetch Request
    fetch(url, picaticHeader)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  getEvent = () => {
    // Destructure State
    const { eventId } = this.state

    // Read Event Endpoint
    const url = `${picaticDomain}/event/${eventId}`

    fetch(url, picaticHeader)
      .then(res => res.json())
      .then(event => this.setState({ event: event.data }))
      .catch(err => console.log(err))
  }

  getEventTickets = () => {
    // Destructure State
    const { eventId } = this.state

    // All Tickets Based On Event Id Endpoint
    const url = `${picaticDomain}/ticket_price?filter[event_id]=${eventId}${picaticLimit}`

    fetch(url, picaticHeader)
      .then(res => res.json())
      .then(tickets => this.setState({ tickets: tickets.data }))
      .catch(err => console.log(err))
  }

  getRandomPic = () => {
    fetch('https://source.unsplash.com/category/nature/2880x1800')
      .then(res => res)
      .then(data => {
        // console.log(data)
        const { url } = data
        this.setState({ backgroundUrl: url })
      })
  }

  render() {
    // Destructure State
    const { backgroundUrl, event } = this.state

    // Pass new image to background
    const style = {
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover',
    }

    // Return nothing if the event has not yet loaded
    const noEvent = event === null
    if (noEvent) {
      return false
    }

    const eventDay = moment(event.attributes.start_date).format('MMMM Do, YYYY')

    const venueMap = `https://www.google.com/maps/search/${event.attributes.venue_street}`

    return (
      <MuiThemeProvider theme={theme}>
        <div className="app-img" style={style}>
          <div className="app-overlay" />
          <section className="container">
            <Nav />
            <section className="hero-content">
              <Grid container>
                <Grid item xs={12}>
                  <Typography type="display3">{event.attributes.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography type="display1">{eventDay}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button raised color="primary">Get Tickets</Button>
                </Grid>
              </Grid>

              <a href={venueMap} target="_blank">
                <Typography type="caption">{event.attributes.venue_name} - {event.attributes.venue_street}</Typography>
              </a>

            </section>
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
