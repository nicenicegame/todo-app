import React, { useState, useEffect } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { TodoApp } from './styles/Main'
import Background from './components/Background'
import Nav from './components/Nav'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Todo from './components/Todo'
import MenuBar from './components/MenuBar'
import { v4 as uuidv4 } from 'uuid'

export const ALL = 'all'
export const ACTIVE = 'active'
export const COMPLETED = 'completed'

function App() {
  const [todoStatus, setTodoStatus] = useState(ALL)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [todoInput, setTodoInput] = useState('')
  const [shownTodos, setShownTodos] = useState([])
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
    setIsDarkMode((prevState) => !prevState)
  }

  useEffect(() => {
    if (todoStatus === ALL) {
      setShownTodos(todos)
    } else if (todoStatus === ACTIVE) {
      const allTodos = [...todos]
      const activeTodos = allTodos.filter((todo) => todo.done === false)
      setShownTodos(activeTodos)
    } else if (todoStatus === COMPLETED) {
      const allTodos = [...todos]
      const completedTodos = allTodos.filter((todo) => todo.done === true)
      setShownTodos(completedTodos)
    }
  }, [todoStatus, todos])

  return (
    <>
      <GlobalStyles />
      <Background isDarkMode={isDarkMode} />
      <TodoApp>
        <Nav handleToggleMode={handleToggleMode} isDarkMode={isDarkMode} />
        <Form
          todos={todos}
          setTodos={setTodos}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
        />
        <TodoList>
          {shownTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              done={todo.done}
              shownTodos={shownTodos}
              setShownTodos={setShownTodos}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </TodoList>
        <MenuBar
          length={shownTodos.length}
          setTodoStatus={setTodoStatus}
          todos={todos}
          setTodos={setTodos}
        />
      </TodoApp>
    </>
  )
}

export default App
