import React, { useEffect, useState, useContext } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Todos from "../components/Todos"
import Link from "gatsby"
import ListForm from "../components/ListForm"
import { Context } from "../contexts/Context"
import { data } from "../../data/lists"
import Modal from "../components/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons"
import "../styles/core.css"

const Index = styled.div`
  font-size: 1rem;
  margin: 20px auto;
  max-width: 450px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  color: #f8f8ff;
`

const Header = styled.div`
  background-color: #5dd9a7;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: "MontserratLight", sans-serif;
  padding: 20px 20px 10px;
  color: #fff;
`

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const ListItemButton = styled.button`
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  ${"" /* background: rgba(255, 255, 255, 0.2); */}
  background: none;
  font-family: "Montserrat", sans-serif;
  border: none;
  width: 100%;
  color: #fff;
  display: flex;
  &:hover {
    box-shadow: 0px 0px 10px rgb(0 0 0 / 0.2);
    background-color: #fff;
    color: #000;
  }
`

const ListCon = styled.div`
  padding: 20px;
`

const NewListButton = styled.button`
  background: none;
  border: none;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f8ff;
  margin-top: 50px;
`

const AddListIcon = styled.span`
  background-color: #5dd9a7;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #f8f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  font-size: 10px;
  &:hover {
    transform: scale(1.2);
  }
`
const ListIcon = styled.span`
  background-color: #d2aeec;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #f8f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const IndexPage = () => {
  const [showListForm, setShowListForm] = React.useState(false)
  const [lists, setLists] = React.useState(data)
  const [activeList, setActiveList] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const viewList = selectedList => {
    setActiveList(selectedList)
    setShowModal(true)
  }

  const addList = text => {
    let newListEntry = {
      slug: text,
      items: [],
    }
    const newList = [...lists, newListEntry]
    setLists(newList)
  }

  const updateLists = todos => {
    // take updated todos and add them to the list
    const newListObj = {
      slug: activeList.slug,
      items: todos,
    }
    // update lists state
    setActiveList(newListObj)
    // updateStateLists(activeList)
  }

  useEffect(() => {
    updateStateLists(activeList)
  }, [activeList])

  const updateStateLists = newList => {
    // loop through current lists, find list with matching slug, update that list with new items
    let listsCopy = lists
    listsCopy.map((list, index) => {
      if (list?.slug === newList?.slug) {
        list.slug = newList.slug
        list.items = newList.items
      } else {
        return list
      }
    })
    setLists(listsCopy)
  }

  return (
    <Context.Provider
      value={{
        lists,
        activeList,
        setLists,
        setActiveList,
        updateLists,
      }}
    >
      <Index>
        <Header>
          <Title>ToDo or Not ToDo</Title>
        </Header>
        {!showModal && (
          <ListCon className="list-con">
            <h3>Your Lists:</h3>
            <ListItems>
              {lists.map((list, index) => {
                return (
                  <ListItemButton
                    key={(list, index)}
                    onClick={() => viewList(list)}
                  >
                    <ListIcon>
                      <FontAwesomeIcon icon={faList} />
                    </ListIcon>
                    {list.slug}
                  </ListItemButton>
                )
              })}
              {showListForm && <ListForm addList={addList} />}
            </ListItems>
            {!showListForm && (
              <NewListButton onClick={() => setShowListForm(true)}>
                <AddListIcon>
                  <FontAwesomeIcon icon={faPlus} />
                </AddListIcon>
                Create New List
              </NewListButton>
            )}
          </ListCon>
        )}
        {showModal && <Modal data={activeList} setShowModal={setShowModal} />}
      </Index>
    </Context.Provider>
  )
}

export default IndexPage
