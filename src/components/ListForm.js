import React, { useEffect } from "react"

const ListForm = ({ addList }) => {
  const [value, setValue] = React.useState("")

  useEffect(() => {
    console.log("value", value)
  }, [value])

  const handleSubmit = e => {
    console.log("submit clicked!")
    e.preventDefault()
    if (!value) return
    addList(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
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
