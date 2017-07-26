import React, { Component } from 'react'
import './App.css'

// Material UI Components
import { MuiThemeProvider } from 'material-ui/styles'
import Button from 'material-ui/Button'

// Components
import Nav from './components/Nav'

// Picatic API Key
const PICATIC_API_KEY = 'sk_live_e53cbafd83670003d7de88169eb50851'

// Picatic credentials
const picaticDomain = 'https://api.picatic.com/v2'
const picaticHeader = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${PICATIC_API_KEY}`,
  },
}

const picaticId = 664654
const eventId = 117480

// url Request
const url = `${picaticDomain}/event/${eventId}`
// const url = `${picaticDomain}/event?filter[user_id]=${picaticId}&page[limit]=2&page[offset]=0`

class App extends Component {
  state = {
    url: null,
  }
  componentWillMount() {
    this.getRandomPic()
    fetch(url, picaticHeader)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(res => console.log(res))
  }
  getRandomPic = () => {
    fetch('https://source.unsplash.com/category/nature/2880x1800')
      .then(res => res)
      .then(data => {
        // console.log(data)
        const { url } = data
        this.setState({ url })
      })
  }
  render() {
    // Destructure State
    const { url } = this.state

    // Pass new image to background
    const style = {
      backgroundImage: `url(${url})`,
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
              <Button>Buy Now</Button>
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
