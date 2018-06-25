import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import { RVCard, RVText, RVButton, RVGrid } from 'components'
import { Layout, Spacing } from 'styles'

const styles = {
  container: {
    display: 'flex',
  },
  list: {
    listStyle: 'none',
    minWidth: 200,
  },
  buttonSpacing: {
    margin: Layout.calcSpace(4),
  },
}

const Event = ({ id, startDate }) => (
  <li key={id}>
    <Link to={`/event/${id}`}>{moment(startDate).format('MMMM Do, Y')}</Link>
  </li>
)

const Events = ({ data }) => {
  const events = data.allContentfulEvents.edges
  const event = events[0].node
  console.log('Spacing', Spacing)

  return (
    <div>
      <div style={styles.container}>
        <ul style={styles.list}>
          {events.map(({ node }) => <Event key={node.id} {...node} />)}
        </ul>

        <RVCard>
          <Link to={`/event/${event.id}`}>
            <RVText tag="h3">{event.title}</RVText>
          </Link>
          <div
            dangerouslySetInnerHTML={{
              __html: event.description.childMarkdownRemark.html,
            }}
          />
          {event.talks.map(talk => (
            <RVGrid key={talk.id}>
              <RVText subheading>{talk.title}</RVText>
              <div>
                {talk.speakers.map(speaker => (
                  <div key={speaker.id}>
                    <div>
                      {speaker.firstName} {speaker.lastName}
                    </div>
                    <div>
                      {speaker.jobTitle} at {speaker.company}
                    </div>
                  </div>
                ))}
              </div>
            </RVGrid>
          ))}
        </RVCard>
      </div>
      <RVCard center>
        <RVText subheading>Have an idea for a talk?</RVText>
        <div style={styles.buttonSpacing}>
          <RVButton>Reach Out</RVButton>
        </div>
        <RVText>
          We are always looking for presenters with interesting ideas, projects
          or tips to share.
        </RVText>
      </RVCard>
    </div>
  )
}

export default Events

Events.PropTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query eventsQuery {
    allContentfulEvents(limit: 1000) {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          startDate
          talks {
            id
            title
            speakers {
              id
              firstName
              lastName
              jobTitle
              company
            }
          }
        }
      }
    }
  }
`
