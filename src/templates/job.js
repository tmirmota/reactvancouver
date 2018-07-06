import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'

const JobTemplate = ({ data }) => {
  const job = data.contentfulJobs
  const { title, description } = job

  return (
    <Layout>
      <div>
        <h4>{title}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default JobTemplate

JobTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query jobQuery($id: String!) {
    contentfulJobs(id: { eq: $id }) {
      title
      location {
        lon
        lat
      }
      urlToJobApplication
      companyName
      companyWebsiteUrl
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
