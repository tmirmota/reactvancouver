import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { RVBox, RVText } from 'components'
import { Layout, Colors } from 'styles'

const Sponsors = ({ sponsors, ...otherProps }) => (
  <RVBox alignCenter {...otherProps}>
    <RVText subheading>Proudly sponsored by</RVText>
    <RVBox flex flexWrap grey radius spaceEvenly itemsCenter p3 mb3>
      {sponsors ? (
        sponsors.map(sponsor => {
          sponsor = sponsor.node || sponsor
          return (
            <RVBox
              key={sponsor.id}
              tag="a"
              href={sponsor.companyUrl}
              target="_blank"
              mr2
            >
              {sponsor.companyLogoDark ? (
                <Img fixed={sponsor.companyLogoDark.fixed} />
              ) : (
                sponsor.companyName
              )}
            </RVBox>
          )
        })
      ) : (
        <RVText>No Sponsors</RVText>
      )}
    </RVBox>

    <RVText
      tag="a"
      href="https://reactvancouver.typeform.com/to/D7KXgd"
      target="_blank"
    >
      Become a Sponsor
    </RVText>
  </RVBox>
)

export default Sponsors

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.object),
}
