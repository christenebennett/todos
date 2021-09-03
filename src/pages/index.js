import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Todos from "../components/Todos"
import Link from "gatsby"
import ListForm from "../components/ListForm"

const Index = styled.div`
  font-family: "arial";
  font-size: 1rem;
  margin: 20px auto;
  max-width: 600px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`

export const pageQuery = graphql`
  query HomePageQuery {
    allList {
      edges {
        node {
          slug
          lists {
            items {
              complete
              text
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const listData = data.allList.edges
  const [showListForm, setShowListForm] = React.useState(false)
  const [lists, setLists] = React.useState(listData)
  const addList = text => {
    let newListEntry = {
      node: {
        slug: encodeURI(text),
        lists: [
          {
            items: [],
          },
        ],
      },
    }
    const newList = [...lists, newListEntry]
    setLists(newList)
  }

  return (
    <Index>
      <Title>Get Stuff Done</Title>
      {lists.map((list, index) => {
        return (
          <a key={(list, index)} href={`/${list.node.slug}`}>
            <div>hi {list.node.slug}</div>
          </a>
        )
      })}
      {showListForm && <ListForm addList={addList} />}
      {!showListForm && (
        <button onClick={() => setShowListForm(true)}>Create New List</button>
      )}
    </Index>
  )
}

export default IndexPage
