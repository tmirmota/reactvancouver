import React from 'react'
import PropTypes from 'prop-types'

const SpeakerTemplate = ({ data }) => {
  const speaker = data.contentfulSpeakers
  const { firstName, lastName } = speaker

  return (
    <div>
      <h4>
        {lastName}, {firstName}
      </h4>
    </div>
  )
}

export default SpeakerTemplate

SpeakerTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query speakerQuery($id: String!) {
    contentfulSpeakers(id: { eq: $id }) {
      firstName
      lastName
    }
  }
`
