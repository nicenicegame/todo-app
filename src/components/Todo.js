import React from 'react'
import { TodoItem, CheckBox, CustomCheckBox } from '../styles/Todo'
import Check from '../images/icon-check.svg'

export default function Todo({ id, name, done, shownTodos, setShownTodos }) {
  const handleTodoDone = () => {
    const newTodos = [...shownTodos]
    const thisTodo = newTodos.find((todo) => todo.id === id)
    thisTodo.done = !done
    setShownTodos(newTodos)
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
    </TodoItem>
  )
}
