import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
  RVText,
  RVBox,
  RVAvatar,
  RVCard,
  RVIcon,
  RVGrid,
  RVContainer,
  Sponsors,
} from 'components'
import { Layout, Colors } from 'styles'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import LayoutComponent from 'layouts'

const renderTalk = talk => (
  <RVCard key={talk.id} mb3 p3>
    <RVText subheading>{talk.title}</RVText>
    {talk.description && (
      <RVBox
        dangerouslySetInnerHTML={{
          __html: talk.description.childMarkdownRemark.html,
        }}
      />
    )}

    {talk.speakers &&
      talk.speakers.map(speaker => (
        <RVBox key={speaker.id} flex>
          {speaker.profilePicture && (
            <RVAvatar img={{ fixed: speaker.profilePicture.fixed }} mr2 />
          )}
          <RVBox>
            <RVText>
              {speaker.firstName} {speaker.lastName}
            </RVText>
            <RVText mb1>
              {speaker.jobTitle}
              {speaker.company && ' at '}
              {speaker.company}
            </RVText>
            <RVBox flex>
              {speaker.githubLink && (
                <RVIcon
                  href={speaker.githubLink}
                  fontAwesomeIcon={{
                    icon: ['fab', 'github'],
                  }}
                  mr1
                />
              )}
              {speaker.linkedInLink && (
                <RVIcon
                  href={speaker.linkedInLink}
                  fontAwesomeIcon={{
                    icon: ['fab', 'linkedin'],
                  }}
                />
              )}
            </RVBox>
          </RVBox>
        </RVBox>
      ))}
  </RVCard>
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
    <Link to={`/event/${event.node.slug}`}>
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
    <LayoutComponent>
      <RVContainer pt8>
        <RVGrid columns3 mt3>
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

        <RVBox grey radius p3 mb3>
          <RVText subheading>Talks</RVText>
          {talks ? (
            talks.map(talk => renderTalk(talk))
          ) : (
            <RVText>No Talks</RVText>
          )}
        </RVBox>

        <Sponsors sponsors={sponsors} />
      </RVContainer>
    </LayoutComponent>
  )
}

export default EventTemplate

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query eventQuery($slug: String!) {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
    contentfulEvents(slug: { eq: $slug }) {
      id
      slug
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
          githubLink
          linkedInLink
          profilePicture {
            fixed(height: 50, width: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
      sponsors {
        id
        companyUrl
        companyLogoDark {
          fixed(width: 160) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
