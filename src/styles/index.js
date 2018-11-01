import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0 !important;
    text-rendering: geometricPrecision;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #282a2d;
  }
  
	textarea{
      resize: vertical;
  }
`

const defaultTheme = {
  body: {
    background: 'white',
    color: 'black'
  }
}

export { GlobalStyles, defaultTheme }