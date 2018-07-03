import React from 'react'
import PropTypes from 'prop-types'

const JobTemplate = ({ data }) => {
  const job = data.contentfulJobs
  const { title, description } = job

  return (
    <div>
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}} />
    </div>
  )
}

export default JobTemplate

JobTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query jobQuery($id: String!) {
  contentfulJobs(id: {eq: $id}) {
    title
    location {
      lon
      lat
    }
    urlToJobApplication
    companyName
    companyWebsiteUrl
    description {
      childMarkdownRemark {html}
    }
  }
}
`
