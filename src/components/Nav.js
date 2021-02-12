import React from 'react'
import { StyledNav, ToggleModeButton } from '../styles/Nav'
import Moon from '../images/icon-moon.svg'
import Sun from '../images/icon-sun.svg'

const Nav = ({ handleToggleMode, isDarkMode }) => {
  return (
    <StyledNav>
      <h1>Todo</h1>
      <ToggleModeButton onClick={handleToggleMode}>
        {isDarkMode ? (
          <img src={Sun} alt="sun" />
        ) : (
          <img src={Moon} alt="moon" />
        )}
      </ToggleModeButton>
    </StyledNav>
  )
}

export default Nav
