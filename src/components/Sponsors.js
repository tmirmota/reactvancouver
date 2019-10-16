import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { RVContainer, RVBox, RVText, RVLink, RVButton } from 'components'
import { Layout, Colors } from 'styles'

const Sponsors = ({ sponsors, ...otherProps }) => (
  <RVBox grey alignCenter {...otherProps}>
    <RVText subheading pt3>
      Proudly sponsored by
    </RVText>
    <RVContainer>
      <RVBox grey radius pb3>
        <RVBox flex flexWrap radius spaceEvenly itemsCenter p3 mb1>
          {sponsors ? (
            sponsors.map(sponsor => {
              sponsor = sponsor.node || sponsor
              return (
                <RVBox
                  key={sponsor.id}
                  mr2
                >
                  <RVLink href={sponsor.companyUrl}>
                    {sponsor.companyLogoDark ? (
                      <Img
                        fixed={sponsor.companyLogoDark.fixed}
                        alt={sponsor.companyName}
                      />
                    ) : (
                      sponsor.companyName
                    )}
                  </RVLink>
                </RVBox>
              )
            })
          ) : (
            <RVText>No Sponsors</RVText>
          )}
        </RVBox>

        {/* <RVLink href="https://reactvancouver.typeform.com/to/D7KXgd">
          <RVButton decorative>Become a Sponsor</RVButton>
        </RVLink> */}
      </RVBox>
    </RVContainer>
  </RVBox>
)

export default Sponsors

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.object),
}
