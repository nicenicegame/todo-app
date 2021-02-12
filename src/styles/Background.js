import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 40vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const LightDesktop = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DarkDesktop = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LightMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const DarkMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
