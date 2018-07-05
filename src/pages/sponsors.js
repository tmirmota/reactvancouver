import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Sponsor = ({ id, companyName }) => (
  <Link to={`/sponsor/${id}`}>
    <h3>{companyName}</h3>
  </Link>
)

const Sponsors = ({ data }) => {
  const sponsors = data.allContentfulSponsors.edges

  if (sponsors.length <= 0) {
    return <div>No Sponsors</div>
  }

  return (
    <div>{sponsors.map(({ node }) => <Sponsor key={node.id} {...node} />)}</div>
  )
}

export default Sponsors

Sponsors.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsors(limit: 1000) {
      edges {
        node {
          id
          companyName
        }
      }
    }
  }
`
