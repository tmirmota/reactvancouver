import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import {
  RVBox,
  RVGrid,
  RVCard,
  RVText,
  RVInput,
  RVButton,
  MeetupGroup,
  SponsorsSection,
} from 'components'
import Layout from 'layouts'

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
            <RVText title>
              {group ? group.members.toLocaleString() : 'A few'}
            </RVText>
          )}
        </MeetupGroup>
        <RVText subheading>React Lovers in Vancouver</RVText>
      </RVText>

      {/* https://github.com/gatsbyjs/gatsby/issues/4033 */}
      <RVBox>
        <RVText title>{talksThisYear.toLocaleString()}</RVText>
        <RVText subheading>Talks This Year</RVText>
      </RVBox>
      <RVBox>
        <RVText title>{totalEvents.toLocaleString()}</RVText>
        <RVText subheading>Events since Jan 2016</RVText>
      </RVBox>
    </RVGrid>
  )
}

const IndexPage = ({ data }) => {
  const upcomingEvent = data.allContentfulEvents.edges.filter(
    ({ node: event }) => moment(event.startDate).isAfter()
  )[0]
  const pastEvents = data.allContentfulEvents.edges.filter(({ node: event }) =>
    moment(event.startDate).isBefore()
  )

  return (
    <Layout>
      <div>
        <RVText tag="h1" my4 alignCenter>
          Join one of the biggest tech communities in Vancouver
        </RVText>
        {renderStats(data)}
        <SponsorsSection sponsors={data.allContentfulSponsors.edges} />

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

        <RVGrid gridTemplateColumns={['repeat(1,1fr)', '1fr 2fr', '1fr 2fr']}>
          <div>
            <RVText heading>Contact Us</RVText>
            <RVText>or email us at: </RVText>
          </div>
          <form>
            <RVBox flex>
              <RVInput placeholder="Name" />
              <RVInput placeholder="Email" />
            </RVBox>

            <RVInput tag="textarea" placeholder="Message" rows="9" />
            <RVButton style={{ float: 'right' }} mt2>
              Submit
            </RVButton>
          </form>
        </RVGrid>
      </div>
    </Layout>
  )
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
          startDate
          talks {
            id
          }
        }
      }
    }
    allContentfulSponsors(limit: 1000) {
      edges {
        node {
          id
          companyName
          companyLogoDark {
            resolutions(width: 200) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
