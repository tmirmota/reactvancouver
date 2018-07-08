import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'
import { RVContainer } from 'components'

const TalkTemplate = ({ data }) => {
  const sponsor = data.contentfulTalks
  const { title } = sponsor

  return (
    <Layout>
      <RVContainer pt8>
        <h4>{title}</h4>
      </RVContainer>
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
