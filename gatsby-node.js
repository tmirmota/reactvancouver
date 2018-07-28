const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      // Speaker Pages
      graphql(
        `
          {
            allContentfulSpeakers(limit: 1000) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      )
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          const speakerTemplate = path.resolve(`./src/templates/speaker.js`)

          result.data.allContentfulSpeakers.edges.forEach(
            ({ node: { id } }) => {
              createPage({
                path: `/speaker/${id}/`,
                component: slash(speakerTemplate),
                context: {
                  id,
                },
              })
            }
          )
        })

        // Event Pages
        .then(() => {
          graphql(
            `
              {
                allContentfulEvents(limit: 1000) {
                  edges {
                    node {
                      id
                      slug
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              reject(result.errors)
            }

            const eventTemplate = path.resolve(`./src/templates/event.js`)

            result.data.allContentfulEvents.edges.forEach(
              ({ node: { slug, id } }) => {
                createPage({
                  path: `/event/${slug}`,
                  component: slash(eventTemplate),
                  context: {
                    id,
                    slug,
                  },
                })
              }
            )
          })
        })

        // Talk Pages
        .then(() => {
          graphql(
            `
              {
                allContentfulTalks(limit: 1000) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              reject(result.errors)
            }

            const talkTemplate = path.resolve(`./src/templates/talk.js`)

            result.data.allContentfulTalks.edges.forEach(({ node: { id } }) => {
              createPage({
                path: `/talk/${id}`,
                component: slash(talkTemplate),
                context: {
                  id,
                },
              })
            })
          })
        })

        // Job Pages
        .then(() => {
          graphql(
            `
              {
                allContentfulJobs(limit: 1000) {
                  edges {
                    node {
                      id
                      slug
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              reject(result.errors)
            }

            const jobTemplate = path.resolve(`./src/templates/job.js`)

            result.data.allContentfulJobs.edges.forEach(
              ({ node: { id, slug } }) => {
                createPage({
                  path: `/job/${slug}`,
                  component: slash(jobTemplate),
                  context: {
                    id,
                    slug,
                  },
                })
              }
            )
          })
        })

        // Sponsor Pages
        .then(() => {
          graphql(
            `
              {
                allContentfulSponsors(limit: 1000) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            `
          ).then(result => {
            if (result.errors) {
              reject(result.errors)
            }

            const sponsorTemplate = path.resolve(`./src/templates/sponsor.js`)

            result.data.allContentfulSponsors.edges.forEach(
              ({ node: { id } }) => {
                createPage({
                  path: `/sponsor/${id}`,
                  component: slash(sponsorTemplate),
                  context: {
                    id,
                  },
                })
              }
            )
          })
        })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
