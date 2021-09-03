import React from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"

const Todos = () => {
  const [todos, setTodos] = React.useState([
    { text: "Schedule dog grooming appointment", complete: false },
    { text: "Buy birthday gift for mom", complete: false },
    { text: "Check out best microphones for recording", complete: false },
  ])

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
    <div className="app">
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
    </div>
  )
}

export default Todos
