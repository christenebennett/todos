import { graphql } from "gatsby"
import React from "react"
import Todos from "../components/Todos"
import ListForm from "../components/ListForm"

// grab the data
export const query = graphql`
  query ($slug: String!) {
    list(slug: { eq: $slug }) {
      slug
      lists {
        items {
          text
          complete
        }
      }
    }
  }
`

const TemplatePage = ({ data }) => {
  const listData = data.list //get the data from the same source as the query at top

  return (
    <div id={`${listData.slug}`} className={`Main ` + listData.slug}>
      <Todos data={listData} />
    </div>
  )
}

export default TemplatePage
