import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const TalkTemplate = ({ data }) => {
  const sponsor = data.contentfulTalks
  const { title } = sponsor

  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default TalkTemplate

TalkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query talkQuery($id: String!) {
    contentfulTalks(id: { eq: $id }) {
      title
    }
  }
`
