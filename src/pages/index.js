import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import { css } from 'react-emotion'
import {
  Hero,
  RVBox,
  RVButton,
  RVLink,
  RVCard,
  RVContainer,
  RVGrid,
  RVText,
  MeetupGroup,
  Sponsors,
  Speaker,
  ContactUs,
  EventDetails,
} from 'components'
import Layout from 'layouts'

const styles = {
  statsTitle: css({
    fontSize: '5rem',
  }),
}

function getUpcomingEvent(events) {
  const upcomingEvents = events.filter(({ node: event }) =>
    moment(event.startDate).isAfter()
  )
  let upcomingEvent = { node: { location: {} } }
  if (upcomingEvents.length > 0) {
    upcomingEvent = upcomingEvents[0]
  }
  return upcomingEvent
}

function getPastEvents(events) {
  return events.filter(({ node: event }) => moment(event.startDate).isBefore())
}

function getSpeakersFromTalks(talks) {
  return talks.reduce((arr, talk) => {
    const { speakers } = talk.node
    if (!speakers) {
      return arr
    }
    return arr.concat(speakers)
  }, [])
}

function getTalksCount(talks) {
  return talks.reduce((sum, { node }) => {
    const talkDate = moment(node.date)

    if (talkDate.isBefore()) {
      return sum + 1
    }
    return sum
  }, 0)
}

function getRecentSpeakers(speakers, count = 4) {
  return speakers.reduce((arr, speaker) => {
    const speakerExists = arr.find(s => s.id === speaker.id)
    if (speakerExists || arr.length === count) {
      return arr
    }
    return arr.concat(speaker)
  }, [])
}

function getOldestEvent(events) {
  return events[events.length - 1]
}

export default class IndexPage extends React.Component {
  _renderStats = ({ talks, pastEvents }) => {
    const talksCount = getTalksCount(talks)
    const oldestEvent = getOldestEvent(pastEvents)

    return (
      <RVContainer my8>
        <RVGrid columns3 alignCenter mb2>
          <RVText>
            {/* <MeetupGroup>
              {group => (
                <RVText title className={styles.statsTitle}>
                  {group && group.members
                    ? group.members.toLocaleString()
                    : '2000'}
                </RVText>
              )}
            </MeetupGroup> */}
            {/* meetup api is suddenly failing to fetch correct number */}
            <RVText title className={styles.statsTitle}>
              {'2500+'}
            </RVText>
            <RVText subheading>React Vancouver Fans</RVText>
          </RVText>

          <RVBox>
            <RVText title className={styles.statsTitle}>
              {talksCount.toLocaleString()}
            </RVText>
            <RVText subheading>Talks since Oct 2015</RVText>
          </RVBox>
          <RVBox>
            <RVText title className={styles.statsTitle}>
              {pastEvents.length.toLocaleString()}
            </RVText>
            <RVText subheading>
              Events since {moment(oldestEvent.node.startDate).format('MMM Y')}
            </RVText>
          </RVBox>
        </RVGrid>
      </RVContainer>
    )
  }

  render() {
    const {
      allContentfulEvents,
      allContentfulTalks,
      allContentfulSponsors,
    } = this.props.data

    const events = allContentfulEvents && allContentfulEvents.edges
    const talks = allContentfulTalks && allContentfulTalks.edges
    const sponsors = allContentfulSponsors && allContentfulSponsors.edges

    const upcomingEvent = getUpcomingEvent(events)
    const pastEvents = getPastEvents(events)

    const speakers = getSpeakersFromTalks(talks)
    const recentSpeakers = getRecentSpeakers(speakers)

    return (
      <Layout
        theme="dark"
        title="Everything React in Vancouver"
        description="React Vancouver is a community of developers, designers, marketers and entrepreneurs that are passionate about React."
        keywords="react, vancouver, events, developers, frontend, development, frameworks"
      >
        <Hero sponsors={sponsors} />

        {/* STATS */}

        {this._renderStats({ talks, pastEvents })}

        {/* EVENTS */}

        <RVContainer>
          <RVGrid
            gridTemplateColumns={['repeat(1,1fr)', '2fr 1fr', '2fr 1fr']}
            id="events"
            my4
          >
            {pastEvents[0].node.title && (
              <RVCard p3>
                <EventDetails {...pastEvents[0].node} />
              </RVCard>
            )}
            <RVCard p3>
              <RVText subheading>Past Events</RVText>
              {pastEvents.map(({ node: event }, index) => {
                const eventListLimit = 8
                if (index >= eventListLimit) return null

                return (
                  <RVLink navigate={`/event/${event.slug}`} key={event.id}>
                    <RVText mb1>{event.title}</RVText>
                  </RVLink>
                )
              })}
            </RVCard>
          </RVGrid>
        </RVContainer>

        <RVBox mb4>
          <Sponsors mb3 sponsors={sponsors} />
        </RVBox>

        {/* SPEAKERS */}
        <RVContainer>
          <RVBox my8>
            <RVText subheading mx-auto alignCenter style={{ maxWidth: 700 }}>
              Latest speakers
            </RVText>
            <RVGrid columns4>
              {recentSpeakers.map(speaker => (
                <Speaker
                  key={speaker.id}
                  fixed={
                    speaker.profilePicture ? speaker.profilePicture.fixed : null
                  }
                  {...speaker}
                />
              ))}
            </RVGrid>
            <RVBox alignCenter mt3>
              <Link to="/speakers">
                <RVButton decorative>Discover All Speakers</RVButton>
              </Link>
            </RVBox>
          </RVBox>

          {/* CONTACT US */}

          <section id="contact-us">
            <ContactUs />
          </section>
        </RVContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query homeQuery {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          venueName
          venueAddress
          startDate
          endDate
          eventbriteEventId
          description {
            childMarkdownRemark {
              html
            }
          }
          location {
            lat
            lon
          }
          talks {
            id
            title
            speakers {
              id
              firstName
              lastName
              jobTitle
              company
              githubLink
              linkedInLink
              profilePicture {
                fixed(height: 50, width: 50) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
          picaticEventId
        }
      }
    }
    allContentfulSponsors(limit: 1000, filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          companyName
          companyUrl
          companyLogoDark {
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
            hero: fixed(width: 148) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    allContentfulTalks(
      limit: 1000
      sort: { fields: [date], order: DESC }
      filter: { date: { ne: null } }
    ) {
      edges {
        node {
          id
          date
          speakers {
            id
            firstName
            lastName
            jobTitle
            company
            profilePicture {
              fixed(width: 200, height: 200) {
                ...GatsbyContentfulFixed
              }
            }
            talks {
              id
              title
              date
            }
          }
        }
      }
    }
  }
`
