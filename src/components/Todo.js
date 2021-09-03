import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const TodoItem = styled.div`
  display: flex;
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
          onClick={() => {
            toggleTodo(todo)
          }}
        />{" "}
        {todo.text}
      </label>
      <button onClick={() => removeTodo(index)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </TodoItem>
  )
}

export default Todo
