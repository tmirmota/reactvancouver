import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from 'layouts'
import { RVContainer } from 'components'

const Speaker = ({ id, firstName, lastName }) => (
  <Link to={`/speaker/${id}`}>
    <h3>
      {lastName}
      {lastName && ', '}
      {firstName}
    </h3>
  </Link>
)

const Speakers = ({ data }) => {
  const speakers = data.allContentfulSpeakers.edges

  if (speakers.length <= 0) {
    return <div>No Speakers</div>
  }

  return (
    <Layout>
      <RVContainer pt8>
        <h2>Speakers</h2>
        {speakers.map(({ node }) => <Speaker key={node.id} {...node} />)}
      </RVContainer>
    </Layout>
  )
}

export default Speakers

Speakers.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query speakersQuery {
    allContentfulSpeakers(limit: 1000) {
      edges {
        node {
          id
          firstName
          lastName
        }
      }
    }
  }
`
