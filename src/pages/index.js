import React from 'react'
import { RVBox, RVGrid, RVText, MeetupGroup } from 'components'

const IndexPage = ({ data }) => (
  <div>
    <h1>Join one of the biggest tech communities in Vancouver</h1>
    <RVGrid grid3 alignCenter>
      <RVText>
        <MeetupGroup>
          {group => (
            <RVText title>
              {group ? group.members.toLocaleString() : 'A few'}
            </RVText>
          )}
        </MeetupGroup>
        <RVText subheading>React Lovers in Vancouver</RVText>
      </RVText>

      {/* https://github.com/gatsbyjs/gatsby/issues/4033 */}
      <RVBox>
        <RVText title>
          {data.allContentfulTalks.edges.length.toLocaleString()}
        </RVText>
        <RVText subheading>Lifetime Talks</RVText>
      </RVBox>
      <RVBox>
        <RVText title>
          {/* 6 Meetups that are not in Contentful */}
          {(data.allContentfulEvents.edges.length + 6).toLocaleString()}
        </RVText>
        <RVText subheading>Meetups since Jan 2016</RVText>
      </RVBox>
    </RVGrid>
  </div>
)

export default IndexPage

export const query = graphql`
  query homeQuery {
    allContentfulTalks(limit: 1000) {
      edges {
        node {
          id
        }
      }
    }
    allContentfulEvents(limit: 1000) {
      edges {
        node {
          id
        }
      }
    }
  }
`
