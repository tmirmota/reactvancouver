import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

// Material UI Components
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { pink } from 'material-ui/colors'

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
    const eventJSON = getEvent.json()
    const event = eventJSON.data

    const getSponsors = await fetch(
      `${picaticHost}/sponsor?filter[event_id]=${eventId}${picaticLimit}`
    )
    const sponsorJSON = getSponsors.json()
    const sponsors = sponsorJSON.data

    return { picture, event, sponsors }
  }
  state = {
    picaticId: 664654,
    event: null,
    eventId: 119444,
    tickets: []
  }

  render() {
    const { picatic, event, sponsors } = this.props

    // Pass new image to background
    const style = {
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover'
    }

    // Return nothing if the event has not yet loaded
    const noEvent = event === null
    if (noEvent) {
      return (
        <div className="hero-content">
          <CircularProgress className="mx-auto" size={50} />
        </div>
      )
    }

    // Reformat event day
    const eventDay = moment(event.attributes.start_date).format('MMMM Do, YYYY')

    // Search for venue in google maps
    const venueMap = `http://maps.google.com/?q=${event.attributes
      .venue_name} ${event.attributes.venue_street}`

    // If sponsors
    // const hasSponsors = sponsors.length !== 0
    const hasSponsors = false

    return (
      <div className="app-img" style={style}>
        {stylesheet}
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
                  Join Wait List
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
                    const { name, external_url, image_uri } = sponsor.attributes
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
      </div>
    )
  }
}
