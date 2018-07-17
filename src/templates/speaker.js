import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'

const SpeakerTemplate = ({ data }) => {
  const speaker = data.contentfulSpeakers
  const { firstName, lastName } = speaker

  const fullName = `${firstName}${lastName && ` ${lastName}`}`

  return (
    <Layout
      title={`${fullName}`}
      description={`${fullName}'s involvement with React Vancouver`}
      keywords="speaker, react, vancouver"
    >
      <div>
        <h4>{fullName}</h4>
      </div>
    </Layout>
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
