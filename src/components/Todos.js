import React, { useContext, useEffect } from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import styled from "styled-components"
import { Context } from "../contexts/Context"

const Main = styled.div`
  font-size: 1rem;
  margin: 20px auto;
  max-width: 600px;
  border-radius: 10px;
  padding: 20px 40px;
`
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  font-family: "MontserratLight", sans-serif;
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const Todos = ({ data }) => {
  const { activeList, updateLists } = useContext(Context)
  const [todos, setTodos] = React.useState(activeList.items)

  useEffect(() => {
    updateLists(todos)
  }, [todos])

  const addTodo = text => {
    const newTodos = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const toggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const getIncompleteCount = () => {
    const incompleteItems = data.items.filter(item => item.complete === false)
    console.log("incompletelength", incompleteItems.length)
    return incompleteItems.length
  }

  return (
    <Main className="app">
      <ListHeader className="list-header">
        <Title>{data.slug}</Title>
        <Title className="todo-count">{getIncompleteCount()}</Title>
      </ListHeader>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </Main>
  )
}

export default Todos
