import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
  background: rgba(255, 255, 255, 0.2);
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: #f2f3f4;
    color: #000;
  }
`

const TrashButton = styled.div`
  background: none;
`

const Todo = ({ todo, index, removeTodo, toggleTodo }) => {
  return (
    <TodoItem
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo)
          }}
        />{" "}
        {todo.text}
      </label>
      <TrashButton onClick={() => removeTodo(index)}>
        <FontAwesomeIcon icon={faTrash} />
      </TrashButton>
    </TodoItem>
  )
}

export default Todo
