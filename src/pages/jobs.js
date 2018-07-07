import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import { RVText, RVCard, RVBox } from 'components'
import Layout from 'layouts'

const Job = ({ id, title, companyName }) => (
  <RVCard mb2 px3 pt2 pb3>
    <Link to={`/job/${id}`}>
      <RVText tag="h3">{title}</RVText>
      <RVText>{companyName}</RVText>
    </Link>
  </RVCard>
)

// An active job starts before now and ends after now
const filterActiveJobs = jobs =>
  jobs.filter(job => {
    // Convert dates to moment
    const startDate = moment(job.node.startDate)
    const endDate = moment(job.node.endDate)
    if (startDate.isBefore() && endDate.isAfter()) {
      return job
    }
  })

const Jobs = ({ data }) => {
  const activeJobs = filterActiveJobs(data.allContentfulJobs.edges)

  if (activeJobs.length <= 0) {
    return <RVBox>No Jobs</RVBox>
  }

  return (
    <Layout>
      <RVBox>
        <RVBox flex itemsBottom spaceBetween>
          <RVText tag="h2">Jobs</RVText>
          <a href="https://tmirmota.seeker.company/submit/job" target="_blank">
            Post a job
          </a>
        </RVBox>
        {activeJobs.map(({ node }) => <Job key={node.id} {...node} />)}
      </RVBox>
    </Layout>
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
          companyName
          urlToJobApplication
          startDate
          endDate
          location {
            lon
            lat
          }
        }
      }
    }
  }
`
