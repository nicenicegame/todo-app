import React from 'react'
import { StyledTodoList } from '../styles/TodoList'

export default function TodoList({ children }) {
  return <StyledTodoList>{children}</StyledTodoList>
}
