import styled from 'styled-components'

export const StyledCross = styled.img`
  cursor: pointer;
  display: none;
`

export const TodoItem = styled.div`
  padding-right: 1.5rem;
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
      opacity: 0.3;
    }
  }

  &:hover ${StyledCross} {
    display: block;
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
  position: relative;
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
    user-select: none;
  }

  &.checked {
    border: none;
    background: linear-gradient(
      to bottom right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );

    img {
      opacity: 1;
    }
  }

  &.checked:hover::after {
    opacity: 0;
  }

  &::after {
    content: '';
    position: absolute;
    background: white;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    background: linear-gradient(
      to bottom right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    border: none;
  }

  &:hover::after {
    opacity: 1;
  }
`
