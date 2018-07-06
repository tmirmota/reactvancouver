import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {
  RVCard,
  RVText,
  RVButton,
  RVGrid,
  RVBox,
  RVAvatar,
  RVIcon,
} from 'components'
import Layout from 'layouts'

const styles = {
  list: {
    listStyle: 'none',
    minWidth: 200,
  },
}

const Event = ({ id, startDate }) => (
  <li key={id}>
    <Link to={`/event/${id}`}>{startDate}</Link>
  </li>
)

const Events = ({ data }) => {
  const events = data.allContentfulEvents.edges
  const event = events[0].node

  return (
    <Layout>
      <div>
        <RVBox flex>
          <RVBox tag="ul" style={styles.list}>
            {events.map(({ node }) => <Event key={node.id} {...node} />)}
          </RVBox>

          <RVCard>
            <Link to={`/event/${event.id}`}>
              <RVText tag="h3">{event.title}</RVText>
            </Link>
            {event.description && (
              <div
                dangerouslySetInnerHTML={{
                  __html: event.description.childMarkdownRemark.html,
                }}
              />
            )}

            {event.talks &&
              event.talks.map(talk => (
                // TODO: Remove mb3
                <RVGrid key={talk.id} columns2 mb3>
                  <RVText subheading>{talk.title}</RVText>

                  {talk.speakers &&
                    talk.speakers.map(speaker => (
                      <RVBox key={speaker.id} flex>
                        <RVAvatar
                          img={{
                            fixed: speaker.profilePicture.fixed,
                          }}
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
                </RVGrid>
              ))}
          </RVCard>
        </RVBox>
        <RVCard center my4>
          <RVText subheading>Have an idea for a talk?</RVText>
          <RVBox my3>
            <RVButton>Reach Out</RVButton>
          </RVBox>
          <RVText>
            We are always looking for presenters with interesting ideas,
            projects or tips to share.
          </RVText>
        </RVCard>
      </div>
    </Layout>
  )
}

export default Events

Events.PropTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query eventsQuery {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          startDate(formatString: "MMMM Do, Y")
          talks {
            id
            title
            speakers {
              id
              firstName
              lastName
              jobTitle
              company
              profilePicture {
                fixed(height: 50, width: 50) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
