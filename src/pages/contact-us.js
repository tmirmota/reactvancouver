import React from 'react'
import { RVBox, RVInput, RVGrid, RVText, RVButton } from 'components'
import Layout from 'layouts'

export const contactUsSection = (
  <RVGrid gridTemplateColumns={['repeat(1,1fr)', '1fr 2fr', '1fr 2fr']} mb3>
    <div>
      <RVText heading>Contact Us</RVText>
      <RVText>or email us at: </RVText>
    </div>
    <form>
      <RVBox flex>
        <RVInput placeholder="Name" />
        <RVInput placeholder="Email" />
      </RVBox>

      <RVInput tag="textarea" placeholder="Message" rows="9" />
      <RVButton style={{ float: 'right' }} mt2>
        Submit
      </RVButton>
    </form>
  </RVGrid>
)

export default class ContactUs extends React.Component {
  render() {
    return <Layout>{contactUsSection}</Layout>
  }
}
