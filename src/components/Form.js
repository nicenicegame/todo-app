import React from 'react'
import { CheckBox, CustomCheckBox, StyledForm } from '../styles/Form'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ todoInput, setTodoInput, todos, setTodos }) => {
  const submitTodo = (e) => {
    e.preventDefault()
    if (!todoInput) return

    const newTodo = {
      id: uuidv4(),
      name: todoInput,
      done: false,
    }
    setTodos([...todos, newTodo])
    setTodoInput('')
  }

  return (
    <StyledForm onSubmit={submitTodo}>
      <CheckBox>
        <CustomCheckBox />
      </CheckBox>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Create a new todo..."
      />
    </StyledForm>
  )
}

export default Form
