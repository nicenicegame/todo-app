import React from 'react'
import BGLight from '../images/bg-desktop-light.jpg'
import BGDark from '../images/bg-desktop-dark.jpg'
import BGLightMobile from '../images/bg-mobile-light.jpg'
import BGDarkMobile from '../images/bg-mobile-dark.jpg'
import {
  BackgroundContainer,
  LightDesktop,
  LightMobile,
  DarkDesktop,
  DarkMobile,
} from '../styles/Background'

const Background = ({ isDarkMode }) => {
  return (
    <BackgroundContainer>
      {isDarkMode ? (
        <>
          <DarkDesktop src={BGDark} alt="desktop light" />
          <DarkMobile src={BGDarkMobile} alt="desktop dark" />
        </>
      ) : (
        <>
          <LightDesktop src={BGLight} alt="desktop light" />
          <LightMobile src={BGLightMobile} alt="desktop light" />
        </>
      )}
    </BackgroundContainer>
  )
}

export default Background
