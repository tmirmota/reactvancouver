import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { get } from 'lodash'
import moment from 'moment'
import {
  Hero,
  RVBox,
  RVButton,
  RVLink,
  RVCard,
  RVContainer,
  RVGrid,
  RVText,
  RVInput,
  MeetupGroup,
  Sponsors,
  Speaker,
  ContactUs,
} from 'components'
import Layout from 'layouts'
import { Buttons } from 'styles'
import classNames from 'classnames'

const _renderStats = data => {
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
    0
  )

  return (
    <RVContainer my8>
      <RVGrid columns3 alignCenter mb2>
        <RVText>
          <MeetupGroup>
            {group => (
              <RVText title>
                {group ? group.members.toLocaleString() : 'A few'}
              </RVText>
            )}
          </MeetupGroup>
          <RVText subheading>React Fans in Vancouver</RVText>
        </RVText>

        {/* https://github.com/gatsbyjs/gatsby/issues/4033 */}
        <RVBox>
          <RVText title>{talksThisYear.toLocaleString()}</RVText>
          <RVText subheading>Talks This Year</RVText>
        </RVBox>
        <RVBox>
          <RVText title>{totalEvents.toLocaleString()}</RVText>
          <RVText subheading>Events since Oct 2015</RVText>
        </RVBox>
      </RVGrid>
    </RVContainer>
  )
}

export default class IndexPage extends React.Component {
  scrollToEvents = () => {
    this.events.scrollIntoView({ behavior: 'smooth' })
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
    const talks = data.allContentfulTalks.edges || []
    const speakers = talks.map(({ node: talk }) => talk.speakers[0])
    const assets = data.allContentfulAsset.edges || []
    const rvIdenticon = assets && get(assets[0], 'node.fixed')

    return (
      <Layout
        theme="dark"
        title="Everything React in Vancouver"
        description="React Vancouver is a community of developers, designers, marketers and entrepreneurs that are passionate about React."
        keywords="react, vancouver, events, developers, frontend, development, frameworks"
      >
        <Hero onClickCTA={this.scrollToEvents} sponsors={sponsors} />

        {_renderStats(data)}

        <RVContainer>
          <RVGrid
            boxRef={node => (this.events = node)}
            gridTemplateColumns={['repeat(1,1fr)', '2fr 1fr', '2fr 1fr']}
            my4
          >
            <RVCard p3>
              <RVText subheading>{upcomingEvent.node.title}</RVText>
              {upcomingEvent.node.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      upcomingEvent.node.description.childMarkdownRemark.html,
                  }}
                />
              )}

              {/* TODO: Move into it's own component */}
              <RVBox
                tag="a"
                href={`https://www.picatic.com/${
                  upcomingEvent.node.picaticEventId
                }`}
                style={{
                  alignSelf: 'bottom',
                  color: 'white',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  WebkitFontSmoothing: 'antialiased',
                }}
                className={classNames(Buttons.base, Buttons.medium)}
                px2
                py1
              >
                Get Tickets
              </RVBox>
            </RVCard>
            <RVCard p3>
              <RVText subheading>Past Events</RVText>
              {pastEvents.map(({ node: event }, index) => {
                if (index >= 8) return null
                return (
                  <Link to={`/event/${event.slug}`} key={event.id}>
                    <RVText mb1>{event.title}</RVText>
                  </Link>
                )
              })}
            </RVCard>
          </RVGrid>

          <RVBox mb4>
            <Sponsors mb3 sponsors={sponsors} />
          </RVBox>

          <RVBox my8>
            <RVText subheading mx-auto alignCenter style={{ maxWidth: 700 }}>
              Latest speakers
            </RVText>
            <RVGrid columns4>
              {speakers.map(speaker => (
                <Speaker
                  key={speaker.id}
                  fixed={
                    speaker.profilePicture
                      ? speaker.profilePicture.fixed
                      : rvIdenticon
                  }
                  {...speaker}
                />
              ))}
            </RVGrid>
            <RVBox alignCenter>
              <Link to="/speakers">
                <RVButton>Discover All Speakers</RVButton>
              </Link>
            </RVBox>
          </RVBox>

          {/* <RVBox mb4>
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
          </RVBox> */}

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
      limit: 4
      sort: { fields: [date], order: DESC }
      filter: { date: { ne: null } }
    ) {
      edges {
        node {
          id
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
              date(formatString: "MMM Do, Y")
            }
          }
        }
      }
    }
    allContentfulAsset(
      filter: { id: { eq: "675b334c-a913-5403-bbe3-e354fdca27d9" } }
    ) {
      edges {
        node {
          id
          fixed(width: 200, height: 200) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
