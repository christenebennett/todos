import React from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"
import styled from "styled-components"

const Main = styled.div`
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

const Todos = ({ data }) => {
  console.log("data in todos", data.lists[0].items)
  const [todos, setTodos] = React.useState(data.lists[0].items)
  const addTodo = text => {
    const newTodos = [...todos, { text }]
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

  return (
    <Main className="app">
      <Title>{data.slug}</Title>
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

      <a href="/">Back to All Lists</a>
    </Main>
  )
}

export default Todos
