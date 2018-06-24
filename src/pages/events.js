import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Event = ({ id, title, description }) => (
  <Link to={`/event/${id}`}>
    <h3>{title}</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
  </Link>
)

const Events = ({ data }) => {
  const events = data.allContentfulEvents.edges

  if (events.length <= 0) {
    return <div>No Events</div>
  }

  return (
    <div>
      <h2>Events</h2>
      {events.map(({ node }) => <Event key={node.id} {...node} />)}
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
        }
      }
    }
  }
`
