import React from 'react'
import styled from 'styled-components'

export default function Todo() {
  return (
    <TodoItem>
      <CheckBox>
        <input type="checkbox" />
        <CustomCheckBox></CustomCheckBox>
      </CheckBox>
      <p>Hello, this is test</p>
    </TodoItem>
  )
}

const TodoItem = styled.div`
  display: flex;
  flex-basis: 1;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
  align-items: center;
  background: white;

  p {
    width: 100%;
    padding: 1.5rem 1.5rem 1.5rem 0;
    background: white;
  }
`

const CheckBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background: white;

  input[type='checkbox'] {
    width: 25px;
    height: 25px;
    opacity: 0;
  }
`

const CustomCheckBox = styled.div`
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`
