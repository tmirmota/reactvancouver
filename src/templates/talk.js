import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'

const TalkTemplate = ({ data }) => {
  const sponsor = data.contentfulTalks
  const { title } = sponsor

  return (
    <Layout>
      <div>
        <h4>{title}</h4>
      </div>
    </Layout>
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
