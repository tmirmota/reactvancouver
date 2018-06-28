import React from 'react'
import { SponsorsSection } from 'components'

const IndexPage = () => (
  <div>
    <h1>Join one of the biggest tech communities in Vancouver</h1>
    <SponsorsSection />
  </div>
)

export default IndexPage

// export const query = graphql`
//   query sponsorsQuery {
//     allContentfulSponsors(limit: 1000) {
//       edges {
//         node {
//           id
//           companyName
//           companyLogoDark {
//             resolutions(width: 200) {
//               width
//               height
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `
