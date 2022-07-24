import React from 'react'
import App from './src/components/App'

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
