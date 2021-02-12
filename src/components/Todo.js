import React from 'react'
import { TodoItem, CheckBox, CustomCheckBox, StyledCross } from '../styles/Todo'
import Check from '../images/icon-check.svg'
import Cross from '../images/icon-cross.svg'

export default function Todo({
  id,
  name,
  done,
  shownTodos,
  setShownTodos,
  todos,
  setTodos,
}) {
  const handleTodoDone = () => {
    const newTodos = [...shownTodos]
    const thisTodo = newTodos.find((todo) => todo.id === id)
    thisTodo.done = !done
    setShownTodos(newTodos)
  }

  const deleteHandler = (e) => {
    const newTodos = [...todos]
    const deletedTodos = newTodos.filter((todo) => todo.id !== id)
    setTodos(deletedTodos)
  }

  return (
    <TodoItem>
      <CheckBox>
        <CustomCheckBox
          onClick={handleTodoDone}
          className={`${done ? 'checked' : ''}`}
        >
          <img src={Check} alt={`check-${id}`} />
        </CustomCheckBox>
      </CheckBox>
      <p className={`${done ? 'todo-done' : ''}`}>{name}</p>
      <StyledCross onClick={deleteHandler} src={Cross} alt="cross" />
    </TodoItem>
  )
}
