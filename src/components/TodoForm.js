import React from "react"
import styled from "styled-components"

const TodoInput = styled.input`
  border-radius: 20px;
  padding: 2px 10px;
  width: 100%;
  border: none;
`
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="What's next?"
      />
    </form>
  )
}

export default TodoForm
