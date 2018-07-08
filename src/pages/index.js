import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import {
  RVBox,
  RVGrid,
  RVCard,
  RVText,
  RVButton,
  RVImage,
  MeetupGroup,
  Sponsors,
  ContactUs,
} from 'components'
import { Layout, Colors } from 'styles'
import { contactUsSection } from 'pages/contact-us'
import LayoutComponent from 'layouts'
import mapboxgl from 'mapbox-gl'

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoidG1pcm1vdGEiLCJhIjoiY2phenpkeHl1MW5xcTJ2bWsxa2J2c3B1NCJ9.VzfA7MRGj7E8mdTSBdA4Rw'

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

const renderStats = data => {
  const talksThisYear = data.allContentfulEvents.edges.reduce(
    (sum, { node: event }) => {
      const startOfThisYear = moment().startOf('year')
      const numTalks = event.talks && event.talks.length
      const startDate = moment(event.startDate)

      if (startDate.isAfter(startOfThisYear) && startDate.isBefore()) {
        return sum + numTalks
      }
      return sum
    },
    0
  )

  const totalEvents = data.allContentfulEvents.edges.reduce(
    (sum, { node: event }) => {
      if (moment(event.startDate).isBefore()) {
        sum++
      }
      return sum
    },
    // 6 Meetups that are not in Contentful
    6
  )

  return (
    <RVGrid columns3 alignCenter mb2>
      <RVText>
        <MeetupGroup>
          {group => (
            <RVText heading>
              {group ? group.members.toLocaleString() : 'A few'}
            </RVText>
          )}
        </MeetupGroup>
        <RVText subheading>React Lovers in Vancouver</RVText>
      </RVText>

      {/* https://github.com/gatsbyjs/gatsby/issues/4033 */}
      <RVBox>
        <RVText heading>{talksThisYear.toLocaleString()}</RVText>
        <RVText subheading>Talks This Year</RVText>
      </RVBox>
      <RVBox>
        <RVText heading>{totalEvents.toLocaleString()}</RVText>
        <RVText subheading>Events since Jan 2016</RVText>
      </RVBox>
    </RVGrid>
  )
}

class IndexPage extends React.Component {
  componentDidMount() {
    const upcomingEvent = this.props.data.allContentfulEvents.edges.filter(
      ({ node: event }) => moment(event.startDate).isAfter()
    )[0]
    const { lat, lon } = upcomingEvent.node.location
    if (upcomingEvent.node.location) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [lon, lat],
        zoom: 12,
      })

      new mapboxgl.Marker({ color: Colors.theme.primary })
        .setLngLat([lon, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 30 }) // add popups
            .setHTML(
              `<h3>${upcomingEvent.node.venueName}</h3><p>${
                upcomingEvent.node.title
              }<br />${upcomingEvent.node.venueAddress}</p>`
            )
        )
        .addTo(this.map)
    }
  }
  render() {
    const { data } = this.props
    const upcomingEvent = data.allContentfulEvents.edges.filter(
      ({ node: event }) => moment(event.startDate).isAfter()
    )[0]
    const pastEvents = data.allContentfulEvents.edges.filter(
      ({ node: event }) => moment(event.startDate).isBefore()
    )
    const sponsors = data.allContentfulSponsors.edges

    return (
      <LayoutComponent>
        <div>
          <RVBox alignCenter my4>
            <RVText tag="h1" title mb3>
              Join one of the biggest tech communities in Vancouver
            </RVText>

            <RVButton>Upcoming Meetup</RVButton>
          </RVBox>

          {renderStats(data)}
          <Sponsors sponsors={sponsors} />

          <RVGrid
            gridTemplateColumns={['repeat(1,1fr)', '2fr 1fr', '2fr 1fr']}
            my4
          >
            <RVCard p3>
              <RVText subheading>Upcoming Event</RVText>
              <RVText mb2>{upcomingEvent.node.title}</RVText>

              <RVButton style={{ alignSelf: 'bottom' }}>Get Tickets</RVButton>
            </RVCard>
            <RVCard p3>
              <RVText subheading>Past Events</RVText>
              {pastEvents.map(({ node: event }, index) => {
                if (index >= 8) return null
                return (
                  <Link to={`/event/${event.id}`} key={event.id}>
                    <RVText mb1>{event.title}</RVText>
                  </Link>
                )
              })}
            </RVCard>
          </RVGrid>

          <RVCard style={{ overflow: 'hidden' }} mb4>
            <div
              ref={el => (this.mapContainer = el)}
              style={{ width: '100%', height: 450 }}
            />
          </RVCard>

          <RVBox mb4>
            <RVText heading alignCenter>
              About Us
            </RVText>

            <RVText>
              Join us if you are developers who want to learn more about React
              and/or is looking for a job, recruiters who want to hire React
              developers, or entrepreneurs who wish to meet new people. We host
              monthly meetups which starts off with presentations about
              React/React Native, and end with social time for people to get to
              know each other. We also host workshops and hack nights for people
              from any level of React/React Native. The organizers are React
              enthusiasts who have been working with React since its early
              stages. This community has been, and will continue to be one of
              the best ReactJS meetups in Vancouver.
            </RVText>
          </RVBox>

          <ContactUs />
        </div>
      </LayoutComponent>
    )
  }
}

export default IndexPage

export const query = graphql`
  query homeQuery {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          venueName
          venueAddress
          startDate
          location {
            lat
            lon
          }
          talks {
            id
          }
        }
      }
    }
    allContentfulSponsors(limit: 1000, filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          companyName
          companyLogoDark {
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
