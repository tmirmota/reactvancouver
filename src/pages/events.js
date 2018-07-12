import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {
  RVAvatar,
  RVBox,
  RVButton,
  RVCard,
  RVContainer,
  RVGrid,
  RVIcon,
  RVText,
} from 'components'
import Layout from 'layouts'

const styles = {
  list: {
    listStyle: 'none',
    minWidth: 200,
  },
}

const Event = ({ id, slug, startDate }) => (
  <li key={id}>
    <Link to={`/event/${slug}`}>{startDate}</Link>
  </li>
)

class Events extends React.Component {
  state = {
    seeAllEvents: false,
  }

  toggleEventsList = () => {
    this.setState(({ seeAllEvents }) => ({ seeAllEvents: !seeAllEvents }))
  }

  render() {
    const { data } = this.props
    const { seeAllEvents } = this.state
    const events = data.allContentfulEvents.edges
    const event = events[0].node

    return (
      <Layout>
        <RVContainer pt8>
          <RVBox flex>
            <RVBox tag="ul" style={styles.list}>
              {events.map(({ node }, index) => {
                if (!seeAllEvents && index >= 10) {
                  return null
                }

                return <Event key={node.id} {...node} />
              })}
              <button onClick={this.toggleEventsList}>
                {seeAllEvents ? 'Shorten List' : 'Show All'}
              </button>
            </RVBox>

            <RVCard px3 py2>
              <Link to={`/event/${event.slug}`}>
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
                  </RVGrid>
                ))}
            </RVCard>
          </RVBox>
          <RVCard alignCenter p3 my4>
            <RVText subheading>Have an idea for a talk?</RVText>
            <RVBox my3>
              <RVButton>Reach Out</RVButton>
            </RVBox>
            <RVText>
              We are always looking for presenters with interesting ideas,
              projects or tips to share.
            </RVText>
          </RVCard>
        </RVContainer>
      </Layout>
    )
  }
}

export default Events

Events.propTypes = {
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
          slug
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
              githubLink
              linkedInLink
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
