import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    background: #eeee;
    min-height: 100vh;
}

input[type='text'], button {
    font-family: inherit;
    font-size: 18px;
}

`
export default GlobalStyles
