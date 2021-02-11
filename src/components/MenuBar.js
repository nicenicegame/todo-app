import React from 'react'
import { Menu, FilterBar } from '../styles/MenuBar'

export default function MenuBar({ length, setTodoStatus, todos, setTodos }) {
  const handleFilter = (e) => {
    const buttonType = e.target.innerText
    if (buttonType === 'All') {
      setTodoStatus('all')
    } else if (buttonType === 'Active') {
      setTodoStatus('active')
    } else if (buttonType === 'Complete') {
      setTodoStatus('completed')
    }
  }

  const clearCompleted = () => {
    const allTodos = [...todos]
    const clearedTodos = allTodos.filter((todo) => todo.done === false)
    setTodos(clearedTodos)
  }

  return (
    <Menu>
      <p>{length} items left</p>
      <FilterBar onClick={handleFilter}>
        <button>All</button>
        <button>Active</button>
        <button>Complete</button>
      </FilterBar>
      <button onClick={clearCompleted}>Clear Complete</button>
    </Menu>
  )
}
