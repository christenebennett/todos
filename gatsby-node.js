const { graphql } = require("gatsby")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allList {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  // template page that all lessons will use
  const pageTemplate = require.resolve("./src/templates/TodosTemplate.js")

  // note: an edge is the array of all the data
  data.data.allList.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`, // path for each lesson
      component: pageTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
