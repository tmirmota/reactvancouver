import React from 'react'
import PropTypes from 'prop-types'
import { RVText, RVBox, RVAvatar, RVCard, RVIcon, RVGrid } from 'components'
import { Layout, Colors } from 'styles'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const styles = {
  container: {
    background: Colors.grey.lightDark,
    borderRadius: Layout.radius,
  },
}

const renderTalk = talk => (
  <RVCard key={talk.id} mb3>
    <RVText subheading>{talk.title}</RVText>
    {talk.description && (
      <RVBox
        dangerouslySetInnerHTML={{
          __html: talk.description.childMarkdownRemark.html,
        }}
      />
    )}

    {talk.speakers.map(speaker => (
      <RVBox key={speaker.id} flex>
        <RVAvatar
          img={{ resolutions: speaker.profilePicture.resolutions }}
          mr2
        />
        <RVBox>
          <RVText>
            {speaker.firstName} {speaker.lastName}
          </RVText>
          <RVText mb1>
            {speaker.jobTitle} at {speaker.company}
          </RVText>
          <RVBox flex>
            <RVIcon
              fontAwesomeIcon={{
                icon: ['fab', 'github'],
              }}
              mr1
            />
            <RVIcon
              fontAwesomeIcon={{
                icon: ['fab', 'linkedin'],
              }}
            />
          </RVBox>
        </RVBox>
      </RVBox>
    ))}
  </RVCard>
)

const renderSponsor = sponsor => (
  <RVBox key={sponsor.id}>
    <RVBox tag="a" href={sponsor.companyUrl} target="_blank" mr2>
      {sponsor.companyLogoDark && (
        <Img resolutions={sponsor.companyLogoDark.resolutions} />
      )}
    </RVBox>
  </RVBox>
)

const getEvent = ({ id, events, type }) => {
  const index = events.findIndex(event => event.node.id === id)
  const changeIndex = type === 'next' ? -1 : 1
  const newIndex = index + changeIndex

  if (index === -1 || !events[newIndex]) return null

  return events[newIndex]
}

const renderEventLink = ({ event, textProps, label }) => {
  if (!event) return <div />

  return (
    <Link to={`/event/${event.node.id}`}>
      <RVText {...textProps}>
        {label}: {event.node.title}
      </RVText>
    </Link>
  )
}

const EventTemplate = ({ data }) => {
  const events = data.allContentfulEvents.edges
  const event = data.contentfulEvents
  const { title, talks, sponsors, id } = event

  const previousEvent = getEvent({ id, events, type: 'previous' })
  const nextEvent = getEvent({ id, events, type: 'next' })

  return (
    <div>
      <RVGrid grid3>
        {renderEventLink({ event: previousEvent, label: 'Previous' })}
        <RVText subheading tag="h1" mx-auto>
          {title}
        </RVText>
        {renderEventLink({
          event: nextEvent,
          textProps: { alignRight: true },
          label: 'Next',
        })}
      </RVGrid>

      <RVBox style={styles.container} p3 mb3>
        <RVText subheading>Talks</RVText>
        {talks ? (
          talks.map(talk => renderTalk(talk))
        ) : (
          <RVText>No Talks</RVText>
        )}
      </RVBox>

      <RVBox>
        <RVText flex center subheading>
          Proudly sponsored by
        </RVText>
        <RVBox style={styles.container} flex spaceEvenly itemsCenter p3 mb3>
          {sponsors ? (
            sponsors.map(sponsor => renderSponsor(sponsor))
          ) : (
            <RVText>No Sponsors</RVText>
          )}
        </RVBox>

        <Link to="/">
          <RVText flex center>
            Become a Sponsor
          </RVText>
        </Link>
      </RVBox>
    </div>
  )
}

export default EventTemplate

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query eventQuery($id: String!) {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
        }
      }
    }
    contentfulEvents(id: { eq: $id }) {
      id
      title
      talks {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        speakers {
          id
          firstName
          lastName
          jobTitle
          company
          profilePicture {
            resolutions(height: 50, width: 50) {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
      sponsors {
        id
        companyUrl
        companyLogoDark {
          resolutions(width: 160) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`
