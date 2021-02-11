import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { TodoApp } from './styles/Main'
import Nav from './components/Nav'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Todo from './components/Todo'
import MenuBar from './components/MenuBar'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      name: 'This is Test 1',
      done: false,
    },
    {
      id: uuidv4(),
      name: 'This is Test 2',
      done: false,
    },
    {
      id: uuidv4(),
      name: 'This is Test 3',
      done: true,
    },
    {
      id: uuidv4(),
      name: 'This is Test 4',
      done: false,
    },
  ])

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
        <Nav handleToggleMode={handleToggleMode} isDarkMode={isDarkMode} />
        <Form
          onSubmit={submitTodo}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
        />
        <TodoList>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              done={todo.done}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </TodoList>
        <MenuBar />
      </TodoApp>
    </>
  )
}

export default App
