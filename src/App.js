import React, { Component } from 'react'
import './App.css'

// Material UI Components
import { MuiThemeProvider } from 'material-ui/styles'
import Button from 'material-ui/Button'

// Components
import Nav from './components/Nav'

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
      .then(event => console.log(event))
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
    const { backgroundUrl } = this.state

    // Pass new image to background
    const style = {
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover',
    }

    return (
      <MuiThemeProvider>
        <div className="app-img" style={style}>
          <div className="app-overlay" />
          <Nav />
          <section className="container">
            <div className="hero-content my-5">
              <h1 className="display-3 text-white">React August Meetup</h1>
              <p className="lead text-white">
                brought to you by React Vancouver
              </p>
              <Button raised>Buy Now</Button>
            </div>

            <div className="row">
              <div className="col">
                <h3>When</h3>
              </div>
              <div className="col">
                <h3>When</h3>
              </div>
              <div className="col">
                <h3>When</h3>
              </div>
            </div>
          </section>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
