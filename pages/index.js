import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

// Components
import Layout from 'components/Layout'
import Nav from 'components/Nav'

// Material UI Components
import { CircularProgress } from 'material-ui/Progress'

// Picatic Requests
const picaticHost = 'https://api.picatic.com/v2'
const picaticLimit = '&page[limit]=10&page[offset]=0'

export default class extends Component {
  static async getInitialProps() {
    const unsplashRandom = await fetch(
      'https://source.unsplash.com/category/nature/2880x1800'
    )
    const picture = unsplashRandom.url

    const eventId = 119444

    const getEvent = await fetch(`${picaticHost}/event/${eventId}`)
    const eventJSON = await getEvent.json()
    const event = await eventJSON.data

    const getSponsors = await fetch(
      `${picaticHost}/sponsor?filter[event_id]=${eventId}${picaticLimit}`
    )
    const sponsorsJSON = await getSponsors.json()
    const sponsors = await sponsorsJSON.data

    return { picture, event, sponsors }
  }

  render() {
    const { picture, event, sponsors } = this.props

    // Pass new image to background
    const style = {
      backgroundImage: `url(${picture})`,
      backgroundSize: 'cover'
    }

    const noEvent = event === undefined
    if (noEvent) {
      return (
        <div className="hero-content">
          <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />
        </div>
      )
    }

    // Reformat event day
    const eventDay = moment(event.attributes.start_date).format('MMMM Do, YYYY')

    const googleMapsLink = `http://maps.google.com/?q=${event.attributes
      .venue_name} ${event.attributes.venue_street}`

    const hasSponsors = sponsors.length !== 0

    return (
      <Layout title="React September Meetup | React Vancouver">
        <div className="app-img" style={style}>
          <div className="app-overlay" />
          <section className="container">
            <Nav />
            <section className="hero-content">
              <div className="row align-items-start">
                <div className="col-12">
                  <h1>{event.attributes.title}</h1>
                </div>
                <div className="col-12">
                  <h3>{eventDay}</h3>
                </div>
                <div className="col-12">
                  <div className="mdl-button mdl-js-button mdl-button--raised">
                    <a href={`https://www.picatic.com/${event.id}`}>
                      Get Tickets
                    </a>
                  </div>
                </div>
                {hasSponsors && (
                  <div className="col">
                    {sponsors.map(sponsor => {
                      const {
                        name,
                        external_url,
                        image_uri
                      } = sponsor.attributes
                      return (
                        <div
                          key={sponsor.id}
                          className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        >
                          <a href={external_url} target="_blank">
                            <img
                              src={image_uri}
                              alt={name}
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </Layout>
    )
  }
  componentDidMount() {
    // Insert Picatic widget script
    const script = document.createElement('script')
    script.src = 'https://widget.picatic.com/latest/js/embed.min.js'
    script.id = 'picatic-widget-script'
    script.async = true

    document.body.appendChild(script)
  }
}
