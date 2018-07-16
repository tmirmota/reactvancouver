import React from 'react'
import Layout from 'layouts'
import { ContactUs as ContactUsComponent, RVContainer } from 'components'

export default class ContactUs extends React.Component {
  render() {
    return (
      <Layout>
        <RVContainer pt8>
          <ContactUsComponent />
        </RVContainer>
      </Layout>
    )
  }
}
