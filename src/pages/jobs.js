import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import Layout from 'layouts'
import { Colors } from 'styles'
import {
  RVContainer,
  RVGrid,
  RVText,
  RVCard,
  RVBox,
  RVImage,
  RVLink,
} from 'components'

function getActiveJobs(jobs) {
  return jobs.filter(job => {
    const { startDate, endDate } = job.node
    if (moment(startDate).isBefore() && moment(endDate).isAfter()) {
      return job
    }
  })
}

const Job = ({ slug, title, companyName, logo, startDate }) => (
  <RVLink navigate={`/job/${slug}`}>
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
  </RVLink>
)

Job.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  companyName: PropTypes.string,
  logo: PropTypes.object,
}

const Jobs = ({ data }) => {
  const jobs = data.allContentfulJobs && data.allContentfulJobs.edges

  const activeJobs = getActiveJobs(jobs)

  return (
    <Layout
      title="React Jobs, Careers, and Contracts in Vancouver"
      description="List of React jobs, careers and freelance contracts available in Vancouver."
      keywords="jobs, careers, freelance, react, vancouver"
    >
      <RVContainer pt8>
        <RVBox flex itemsBottom spaceBetween>
          <RVText tag="h2">Job Opportunities</RVText>
          <RVLink href="https://tmirmota.seeker.company/submit/job">
            Post a job
          </RVLink>
        </RVBox>
        {activeJobs.length > 0 ? (
          activeJobs.map(({ node }) => <Job key={node.id} {...node} />)
        ) : (
          <RVText>No Jobs</RVText>
        )}
      </RVContainer>
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
