import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-basis: 1;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 2rem;
  align-items: center;
  background: white;

  input[type='text'] {
    width: 100%;
    border: none;
    padding: 1.5rem 1.5rem 1.5rem 0;
    outline: none;
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
`
