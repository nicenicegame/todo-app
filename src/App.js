import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Todo from './components/Todo'
import Moon from './images/icon-moon.svg'
import Sun from './images/icon-sun.svg'
import Check from './images/icon-check.svg'
import styled from 'styled-components'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [todoInput, setTodoInput] = useState('')

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const submitTodo = (e) => {
    e.preventDefault()
    console.log(todoInput)
    setTodoInput('')
  }

  return (
    <>
      <GlobalStyles />
      <TodoApp>
        <Nav>
          <h1>Todo</h1>
          <ToggleModeButton onClick={handleToggleMode}>
            {isDarkMode ? (
              <img src={Moon} alt="moon" />
            ) : (
              <img src={Sun} alt="sun" />
            )}
          </ToggleModeButton>
        </Nav>
        <Form onSubmit={submitTodo}>
          <CheckBox>
            <input type="checkbox" />
            <CustomCheckBox></CustomCheckBox>
          </CheckBox>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </Form>
        <div className="todo-list">
          <Todo />
        </div>
        <div className="menu-bar">
          <p className="number">5 items left</p>
          <div className="filter">
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
          </div>
          <button>Clear Complete</button>
        </div>
      </TodoApp>
    </>
  )
}

const TodoApp = styled.div`
  width: 40%;
  margin: auto;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0 3rem;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
`

const ToggleModeButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    pointer-events: none;
  }
`

const Form = styled.form`
  display: flex;
  flex-basis: 1;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 2rem;
  align-items: center;
  background: white;

  input[type='text'] {
    width: 100%;
    border: none;
    padding: 1.5rem 1.5rem 1.5rem 0;
    outline: none;
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

export default App
