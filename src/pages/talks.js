import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from 'layouts'
import { RVLink } from 'components'

const Talk = ({ id, title }) => (
  <RVLink navigate={`/talk/${id}`}>
    <h3>{title}</h3>
  </RVLink>
)

const Talks = ({ data }) => {
  const talks = data.allContentfulTalks.edges

  if (talks.length <= 0) {
    return <div>No Talks</div>
  }

  return (
    <Layout
      title="Talks"
      description="List of React Vancouver talks."
      keywords="talks, speakers, react, vancouver"
    >
      <div>
        <h2>Talks</h2>
        {talks.map(({ node }) => (
          <div key={node.id}>
            <Talk {...node} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Talks

Talks.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query talksQuery {
    allContentfulTalks(limit: 1000) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
