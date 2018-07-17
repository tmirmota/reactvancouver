import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'
import { RVBox, RVText, RVContainer } from 'components'

const JobTemplate = ({ data }) => {
  const job = data.contentfulJobs
  const { title, description, urlToJobApplication, companyName } = job

  return (
    <Layout
      title={title}
      description={`${title} at ${companyName}`}
      keywords={`${title},${companyName},jobs,react,vancouver,careers`}
    >
      <RVContainer pt8>
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
      </RVContainer>
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
