import React from 'react'
import PropTypes from 'prop-types'

const SponsorTemplate = ({ data }) => {
  const sponsor = data.contentfulSponsors
  const { companyName } = sponsor

  return (
    <div>
      <h4>{companyName}</h4>
    </div>
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
