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
      'https://source.unsplash.com/1920x1080/?nature,space',
    )
    const picture = unsplashRandom.url

    const eventId = 200645

    const getEvent = await fetch(`${picaticHost}/event/${eventId}`)
    const eventJSON = await getEvent.json()
    const event = await eventJSON.data

    const getSponsors = await fetch(
      `${picaticHost}/sponsor?filter[event_id]=${eventId}${picaticLimit}`,
    )
    const sponsorsJSON = await getSponsors.json()
    const sponsors = await sponsorsJSON.data

    return { picture, event, sponsors }
  }

  render() {
    const { picture, event, sponsors } = this.props

    // Pass new image to background
    const styles = {
      eventBackground: {
        backgroundImage: `url('${picture}')`,
        backgroundSize: 'cover',
      },
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

    const googleMapsLink = `http://maps.google.com/?q=${
      event.attributes.venue_name
    } ${event.attributes.venue_street}`

    const hasSponsors = sponsors.length !== 0

    const renderSponsors = (
      <div className="col sponsors">
        {sponsors.map(sponsor => {
          const { name, external_url, image_uri } = sponsor.attributes
          return (
            <a
              key={sponsor.id}
              href={external_url}
              target="_blank"
              className="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              <img src={image_uri} alt={name} className="img-fluid" />
            </a>
          )
        })}
      </div>
    )
    return (
      <Layout title="React January Meetup | React Vancouver">
        <div className="event event-img" style={styles.eventBackground}>
          <div className="event-overlay" />
          <section className="container">
            <Nav />
            <section className="event-content">
              <div className="row">
                <div className="col-12">
                  <h1>{event.attributes.title}</h1>
                </div>
                <div className="col-12">
                  <h3>{eventDay}</h3>
                </div>
                <div className="col-12">
                  <a
                    href={`https://www.picatic.com/${event.id}`}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored event-button mx-3 mb-3"
                  >
                    Get Tickets
                  </a>
                </div>
                {hasSponsors && renderSponsors}
              </div>
            </section>
            <div className="">
              <a href={googleMapsLink} target="_blank" className="event-map">
                {event.attributes.venue_name} | {event.attributes.venue_street}
              </a>
            </div>
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
