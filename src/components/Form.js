import React from 'react'
import { CheckBox, CustomCheckBox, StyledForm } from '../styles/Form'

const Form = ({ todoInput, setTodoInput }) => {
  return (
    <StyledForm>
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
