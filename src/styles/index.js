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

  .Disqus {
    max-width: 760px;
    min-height: 300px;
    padding-top: 25px;
    padding-bottom: 25px;    
    #disqus_thread a { // Theme color disqus.
      color: #1976d2;
    }
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