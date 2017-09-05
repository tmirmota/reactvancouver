import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

// Components
import Layout from '../components/Layout'

// Material UI Components
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { pink } from 'material-ui/colors'

// Material Web Components

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
          <CircularProgress className="mx-auto" size={50} />
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
            <section className="hero-content">
              <Grid container>
                <Grid item xs={12}>
                  <Typography type="display3">
                    {event.attributes.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography type="display1">{eventDay}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    href={`https://www.picatic.com/${event.id}`}
                    raised
                    color="primary"
                  >
                    Get Tickets
                  </Button>
                </Grid>

                {hasSponsors && (
                  <Grid
                    container
                    align="center"
                    justify="center"
                    className="sponsors"
                  >
                    {sponsors.map(sponsor => {
                      const {
                        name,
                        external_url,
                        image_uri
                      } = sponsor.attributes
                      return (
                        <Grid item key={sponsor.id}>
                          <Button href={external_url} target="_blank">
                            <img
                              src={image_uri}
                              alt={name}
                              className="img-fluid"
                            />
                          </Button>
                        </Grid>
                      )
                    })}
                  </Grid>
                )}
              </Grid>
            </section>
          </section>
        </div>
      </Layout>
    )
  }
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://widget.picatic.com/latest/js/embed.min.js'
    script.id = 'picatic-widget-script'
    script.async = true

    document.body.appendChild(script)
  }
}

const stylesheet = (
  <style jsx>
    {`
      .app-img {
        text-align: center;
        min-height: 100vh;
      }

      .app-overlay {
        background-color: #3f51b5;
        min-height: 100vh;
        opacity: 0.4;
        position: absolute;
        width: 100%;
      }

      .hero-content {
        min-height: calc(100vh - 100px);
        display: flex;
        align-items: center;
      }

      @media (min-width: 800px) {
        .sponsors {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }

      .img-fluid {
        max-height: 50px;
        max-width: 200px;
      }

      @media (max-width: 750px) {
        .sponsors {
          padding-top: 3rem;
        }
        .img-fluid {
          max-height: 25px;
          max-width: 100px;
        }
      }
    `}
  </style>
)
