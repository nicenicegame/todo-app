import React from 'react'
import { Menu, FilterBar } from '../styles/MenuBar'
import { ALL, ACTIVE, COMPLETED } from '../App'

export default function MenuBar({
  length,
  todoStatus,
  setTodoStatus,
  todos,
  setTodos,
}) {
  const handleFilter = (e) => {
    const buttonType = e.target.innerText
    if (buttonType === 'All') {
      setTodoStatus(ALL)
    } else if (buttonType === 'Active') {
      setTodoStatus(ACTIVE)
    } else if (buttonType === 'Complete') {
      setTodoStatus(COMPLETED)
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
        <button className={`${todoStatus === ALL ? 'active' : ''}`}>All</button>
        <button className={`${todoStatus === ACTIVE ? 'active' : ''}`}>
          Active
        </button>
        <button className={`${todoStatus === COMPLETED ? 'active' : ''}`}>
          Complete
        </button>
      </FilterBar>
      <button onClick={clearCompleted}>Clear Complete</button>
    </Menu>
  )
}
