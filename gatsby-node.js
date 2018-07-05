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

          result.data.allContentfulSpeakers.edges.forEach(({ node }) => {
            createPage({
              path: `/speaker/${node.id}/`,
              component: slash(speakerTemplate),
              context: {
                id: node.id,
              },
            })
          })
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

            result.data.allContentfulEvents.edges.forEach(({ node }) => {
              createPage({
                path: `/event/${node.id}`,
                component: slash(eventTemplate),
                context: {
                  id: node.id,
                },
              })
            })
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

            result.data.allContentfulTalks.edges.forEach(({ node }) => {
              createPage({
                path: `/talk/${node.id}`,
                component: slash(talkTemplate),
                context: {
                  id: node.id,
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

            result.data.allContentfulJobs.edges.forEach(({ node }) => {
              createPage({
                path: `/job/${node.id}`,
                component: slash(jobTemplate),
                context: {
                  id: node.id,
                },
              })
            })
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

            result.data.allContentfulSponsors.edges.forEach(({ node }) => {
              createPage({
                path: `/sponsor/${node.id}`,
                component: slash(sponsorTemplate),
                context: {
                  id: node.id,
                },
              })
            })
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
