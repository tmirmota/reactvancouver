import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'

const SpeakerTemplate = ({ data }) => {
  const speaker = data.contentfulSpeakers
  const { firstName, lastName } = speaker

  return (
    <Layout>
      <div>
        <h4>
          {lastName}, {firstName}
        </h4>
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
