import React from 'react'
import { RVContainer, RVText } from 'components'
import Layout from 'layouts'

const NotFoundPage = () => (
  <Layout
    title="Not Found"
    description="React Vancouver page not found."
    keywords="404, not found"
    theme="light"
  >
    <RVContainer pt8>
      <section>
        <RVText tag="h1" heading>
          NOT FOUND
        </RVText>
        <RVText tag="p" subheading>
          You just hit a route that doesn&#39;t exist... the sadness.
        </RVText>
      </section>
    </RVContainer>
  </Layout>
)

export default NotFoundPage
