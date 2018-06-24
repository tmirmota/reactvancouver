import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Talk = ({ id, title }) => (
  <Link to={`/talk/${id}`}>
    <h3>{title}</h3>
  </Link>
)

const Talks = ({ data }) => {
  const talks = data.allContentfulTalks.edges

  if (talks.length <= 0) {
    return <div>No Talks</div>
  }

  return (
    <div>
      <h2>Talks</h2>
      {talks.map(({ node }) => (
        <div key={node.id}>
          <Talk {...node} />
        </div>
      ))}
    </div>
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
