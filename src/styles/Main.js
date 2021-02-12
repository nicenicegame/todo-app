import styled from 'styled-components'

export const TodoApp = styled.div`
  min-height: 100vh;
  width: 40%;
  margin: auto;
  padding: 4rem 0;

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
