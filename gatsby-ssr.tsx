import React from 'react'
import { GLOBAL_CONTEXT_KEY } from './gatsby/gatsby.constants'
import App from './src/components/App'
import Terser from 'terser'

function preScriptBody() {
  var globalContext = undefined
  try {
    globalContext = localStorage.getItem('gcl')
    // Mantain The Initial Global Context updated
    globalContext = globalContext ? JSON.parse(globalContext) : undefined
  } catch (error) {}

  ;(window as any).GLOBAL_CONTEXT = globalContext
}

const MagicScriptTag = () => {
  const boundFn = String(preScriptBody).replace('🔑', GLOBAL_CONTEXT_KEY)

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script key="s-1" dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="mgsc-1" />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
