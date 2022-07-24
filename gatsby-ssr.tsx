import React from 'react'
import { GLOBAL_CONTEXT_KEY } from './gatsby/gatsby.constants'
import App from './src/components/App'
import Terser from 'terser'

function preScriptBody() {
  var HOLA = 'buenos dias'
  console.log('Log from preScriptBody', localStorage, HOLA)
}

const MagicScriptTag = () => {
  const boundFn = String(preScriptBody).replace('🔑', GLOBAL_CONTEXT_KEY)

  let calledFunction = `(${boundFn})()`
  console.log('🤫 Dante ➤ MagicScriptTag ➤ calledFunction', calledFunction)

  calledFunction = Terser.minify(calledFunction).code
  console.log('🤫 Dante ➤ MagicScriptTag ➤ calledFunction', calledFunction)

  // eslint-disable-next-line react/no-danger
  return <script key="s-1" dangerouslySetInnerHTML={{ __html: "var HOLA='hola mundo';" }} />
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="mgsc-1" />)
}

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}
