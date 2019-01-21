import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'layouts'
import Img from 'gatsby-image'
import { RVContainer, RVText, RVBox, RVGrid } from 'components'
import { sortBy } from 'lodash'

const Photo = ({ title, photos }) => (
  <RVBox>
    <RVText subheading mt3>
      {title}
    </RVText>
    <RVGrid columns2>
      {photos.length > 0 &&
        photos.map(({ id, fluid }) => (
          <Img key={id} fluid={fluid} imgStyle={{ borderRadius: 6 }} />
        ))}
    </RVGrid>
  </RVBox>
)

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
}

const Photos = ({ data }) => {
  const albums = data.allContentfulPhotos && data.allContentfulPhotos.edges

  return (
    <Layout
      title="Photos of React Vancouver"
      description="Photos from React Vancouver events and workshops."
      keywords="photos, react, vancouver"
    >
      <RVContainer pt8>
        <RVBox flex itemsBottom spaceBetween>
          <RVText tag="h2">Photos</RVText>
        </RVBox>
        {albums.length > 0 ? (
          albums.map(({ node }) => <Photo key={node.id} {...node} />)
        ) : (
          <RVText>No Photos</RVText>
        )}
      </RVContainer>
    </Layout>
  )
}

export default Photos

Photos.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query photosQuery {
    allContentfulPhotos(limit: 1000) {
      edges {
        node {
          id
          title
          photos {
            id
            fluid(resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
