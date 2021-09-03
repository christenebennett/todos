import React from "react"
import { data } from "../../data/data"
import styled from "styled-components"
import Todos from "../components/Todos"

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
const IndexPage = () => {
  return (
    <Index>
      <Title>Get Stuff Done</Title>

      {data.lists.map(item => {
        return <Todos key={item} item={item} />
      })}
    </Index>
  )
}

export default IndexPage
