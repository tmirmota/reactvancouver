import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {
  RVCard,
  RVText,
  RVButton,
  RVGrid,
  RVBox,
  RVFavicon,
  RVIcon,
} from 'components'

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
              <RVGrid key={talk.id} grid2 mb3>
                <RVText subheading>{talk.title}</RVText>

                {talk.speakers &&
                  talk.speakers.map(speaker => (
                    <RVBox key={speaker.id} flex>
                      <RVFavicon
                        img={{
                          resolutions: speaker.profilePicture.resolutions,
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
                resolutions(height: 40, width: 40) {
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
      }
    }
  }
`
