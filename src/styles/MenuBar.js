import styled from 'styled-components'

export const Menu = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  button {
    border: none;
    background: white;
    cursor: pointer;
  }
`

export const FilterBar = styled.div`
  button {
    margin: 0 0.5rem;
  }

  button.active {
    color: hsl(220, 98%, 61%);
  }
`
