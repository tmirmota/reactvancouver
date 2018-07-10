import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import moment from 'moment'
import { Colors } from 'styles'
import { RVGrid, RVText, RVCard, RVBox, RVImage } from 'components'
import Layout from 'layouts'

const Job = ({ id, slug, title, companyName, logo, startDate }) => (
  <Link to={`/job/${slug}`}>
    <RVCard mb2 px3 pt2 pb3>
      <RVGrid
        gridTemplateColumns={[
          'repeat(1,1fr)',
          '100px 3fr 1fr',
          '100px 3fr 1fr',
        ]}
      >
        <RVBox style={{ alignSelf: 'center' }}>
          {logo ? <RVImage fixed={logo.fixed} /> : null}
        </RVBox>
        <RVBox>
          <RVText tag="h3">{title}</RVText>
          <RVText label style={{ color: Colors.grey.medium }}>
            {companyName}
          </RVText>
        </RVBox>
        <RVBox style={{ alignSelf: 'end', color: Colors.grey.medium }}>
          Posted: {moment(startDate).format('MMM Do, Y')}
        </RVBox>
      </RVGrid>
    </RVCard>
  </Link>
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
          <RVText tag="h2">Job Opportunities</RVText>
          <a
            href="https://tmirmota.seeker.company/submit/job"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          slug
          title
          companyName
          urlToJobApplication
          startDate
          endDate
          location {
            lon
            lat
          }
          logo {
            fixed(width: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
