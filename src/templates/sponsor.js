import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from 'layouts'

const SponsorTemplate = ({ data }) => {
  const sponsor = data.contentfulSponsors
  const { companyName } = sponsor

  return (
    <Layout
      title={`${companyName} Sponsorship`}
      description="React Vancouver sponsor."
      keywords="react, vancouver, sponsor"
    >
      <div>
        <h4>{companyName}</h4>
      </div>
    </Layout>
  )
}

export default SponsorTemplate

SponsorTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query sponsorQuery($id: String!) {
    contentfulSponsors(id: { eq: $id }) {
      companyName
    }
  }
`
