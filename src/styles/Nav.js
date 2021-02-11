import styled from 'styled-components'

export const StyledNav = styled.nav`
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

export const ToggleModeButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    pointer-events: none;
  }
`
