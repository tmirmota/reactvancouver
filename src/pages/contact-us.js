import React from 'react'
import { RVForm, RVInput, RVLabel, RVCard } from 'components'
import Layout from 'layouts'

export default class ContactUs extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <RVForm>
            <RVInput />
          </RVForm>
          <form>
            <RVCard mb2 p0 pt2>
              <RVLabel htmlFor="company">Company Name</RVLabel>
              <RVInput id="company" placeholder="ReactJS Vancouver" />
            </RVCard>
            <RVCard mb2 p0 pt2>
              <RVLabel htmlFor="email">Email Address</RVLabel>
              <RVInput id="email" placeholder="name@email.com" />
            </RVCard>
            <RVCard mb2 p0 pt2>
              <RVLabel htmlFor="message">Message</RVLabel>
              <RVInput id="message" placeholder="Enter your message here" />
            </RVCard>
          </form>
        </div>
      </Layout>
    )
  }
}
