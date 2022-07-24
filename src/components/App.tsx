import React from 'react'
import { ThemeProvider } from '../contex/global.context'

function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default App
