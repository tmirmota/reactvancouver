import React from 'react'
import PropTypes from 'prop-types'

const EventTemplate = ({ data }) => {
  const event = data.contentfulEvents
  const { title } = event

  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default EventTemplate

EventTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query eventQuery($id: String!) {
    contentfulEvents(id: { eq: $id }) {
      title
    }
  }
`
