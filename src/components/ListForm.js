import React from "react"
import styled from "styled-components"

const ListInput = styled.input`
  border-radius: 20px;
  padding: 2px 10px;
  border: none;
`
const ListForm = ({ addList }) => {
  const [value, setValue] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addList(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <ListInput
        type="text"
        className="input-list"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="List name goes here"
      />
    </form>
  )
}

export default ListForm
