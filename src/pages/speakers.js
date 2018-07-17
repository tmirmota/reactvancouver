import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { RVGrid, RVContainer, Speaker } from 'components'
import Layout from 'layouts'

const Speakers = ({ data }) => {
  const speakers = data.allContentfulSpeakers.edges

  if (speakers.length <= 0) {
    return <div>No Speakers</div>
  }
  return (
    <Layout
      title="Speakers"
      description="Upcoming and past React Vancouver event speakers."
      keywords="speakers, talks, learning, react, vancouver"
    >
      <RVContainer pt8>
        <h2>Speakers</h2>
        <RVGrid columns4>
          {speakers.map(({ node: speaker }) => (
            <Speaker
              key={speaker.id}
              fixed={speaker.profilePicture && speaker.profilePicture.fixed}
              {...speaker}
            />
          ))}
        </RVGrid>
      </RVContainer>
    </Layout>
  )
}

export default Speakers

Speakers.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query speakersQuery {
    allContentfulSpeakers(limit: 1000) {
      edges {
        node {
          id
          firstName
          lastName
          jobTitle
          company
          profilePicture {
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed
            }
          }
          talks {
            id
            title
            date(formatString: "MMM Do, Y")
          }
        }
      }
    }
  }
`
