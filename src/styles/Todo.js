import styled from 'styled-components'

export const TodoItem = styled.div`
  display: flex;
  flex-basis: 1;
  align-items: center;
  background: white;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

  p {
    width: 100%;
    padding: 1.5rem 1.5rem 1.5rem 0;
    background: white;

    &.todo-done {
      text-decoration: line-through;
    }
  }
`

export const CheckBox = styled.div`
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

export const CustomCheckBox = styled.div`
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    pointer-events: none;
    opacity: 0;
  }

  &.checked {
    background: black;

    img {
      opacity: 1;
    }
  }
`
