import { createGlobalStyle } from 'styled-components'

const colors = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  green: '#10ACB4'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    }
    body {
    background-color: ${colors.gray};
    color: ${colors.white};
    }
`
