import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'
import { RVBox, RVText } from 'components'

const JobTemplate = ({ data }) => {
  const job = data.contentfulJobs
  const { title, description, urlToJobApplication } = job

  return (
    <Layout>
      <RVBox mb4>
        <RVText tag="h1">{title}</RVText>
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
        {urlToJobApplication && (
          <a href={urlToJobApplication}>See Official Posting</a>
        )}
      </RVBox>
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
