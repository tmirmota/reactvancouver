import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Job = ({ id, title }) => (
  <Link to={`/job/${id}`}>
    <h3>{title}</h3>
  </Link>
)

const Jobs = ({ data }) => {
  const jobs = data.allContentfulJobs.edges

  if (jobs.length <= 0) {
    return <div>No Jobs</div>
  }

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map(({ node }) => <Job key={node.id} {...node} />)}
    </div>
  )
}

export default Jobs

Jobs.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query jobsQuery {
    allContentfulJobs(limit: 1000) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
