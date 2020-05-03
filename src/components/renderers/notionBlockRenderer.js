import React from 'react'
import hljs from 'highlight.js/lib/highlight'
import hljs_javascript from 'highlight.js/lib/languages/javascript'
import hljs_typescript from 'highlight.js/lib/languages/typescript'
import hljs_bash from 'highlight.js/lib/languages/bash'
import hljs_plaintext from 'highlight.js/lib/languages/plaintext'
import hljs_json from 'highlight.js/lib/languages/json'

import Title from './Title'
import './styles.css'
import 'highlight.js/styles/github.css'

// see: https://github.com/highlightjs/highlight.js
hljs.registerLanguage('javascript', hljs_javascript)
hljs.registerLanguage('typescript', hljs_typescript)
hljs.registerLanguage('bash', hljs_bash)
hljs.registerLanguage('plaintext', hljs_plaintext)
hljs.registerLanguage('json', hljs_json)

const notionLanguageToHljs = {
  'Plain Text': 'plaintext',
  JavaScript: 'javascript',
  Bash: 'bash',
  JSON: 'json',
}

function renderBlockImage(meta) {
  return (
    <div className="nso-image">
      <img src={meta.publicImageUrl} style={{ width: `${meta.width}px` }} alt="" />
    </div>
  )
}

function renderBlockCode(children, meta) {
  const hlslanguage = notionLanguageToHljs[meta.language] || 'plaintext'
  const highlightedCode = hljs.highlight(hlslanguage, meta.title).value
  return <pre className="nso-pre-code" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
}

function renderBlockText(children) {
  return <p className="nso-para">{children}</p>
}

function renderBlockHeader(children, level) {
  switch (level) {
    case 1:
      return (
        <p className="nso-header-1 has-text-primary has-background-white-bis subtitle is-2">
          {children}
        </p>
      )
    case 2:
      return (
        <p className="nso-header-2 has-text-primary has-background-white-bis subtitle is-3">
          {children}
        </p>
      )
    case 3:
    default:
      return (
        <p className="nso-header-3 has-text-primary has-background-white-bis subtitle is-5">
          {children}
        </p>
      )
  }
}

function renderBulletedList(children) {
  return (
    <div className="content">
      <ul>{children}</ul>
    </div>
  )
}

function renderNumberedList(children) {
  return (
    <div className="content">
      <ol>{children}</ol>
    </div>
  )
}

function renderListItem(children) {
  return <li>{children}</li>
}

function renderPage(children) {
  return <div>{children}</div>
}

function renderBlock(type, meta, children) {
  switch (type) {
    case 'page':
      return renderPage(children)

    case 'text':
      return renderBlockText(children)

    case 'code':
      return renderBlockCode(children, meta)

    case 'image':
      return renderBlockImage(meta)

    case 'header':
      return renderBlockHeader(children, 1)

    case 'sub_header':
      return renderBlockHeader(children, 2)

    case 'sub_sub_header':
      return renderBlockHeader(children, 3)

    case 'bulleted_list':
      return renderBulletedList(children)

    case 'numbered_list':
      return renderNumberedList(children)

    case 'numbered_list__item':
      return renderListItem(children)

    case 'bulleted_list__item':
      return renderListItem(children)

    case '__meta':
      // we don't parse this block - it contains the pahe meta information such as the slug
      return null

    default:
      console.log('@@@ unknow type to render>renderBlock>', type)
      return null
  }
}

const _attToClassName = {
  i: 'nso-italic',
  b: 'nso-bold',
  s: 'nso-stroke',
  c: 'nso-code',
}

function mkRenderFuncs(_notionPageBlog) {
  return {
    wrapText: text => {
      return <React.Fragment>{text}</React.Fragment>
    },
    renderTextAtt: (children, att) => {
      const className = _attToClassName[att]
      if (!className) {
        console.log(`@@@ no text attribute for: ${att}`)
      }
      return <span className={className || ''}>{children}</span>
    },
    renderLink: (children, ref) => {
      return <a href={ref}>{children}</a>
    },
    renderBlock: (type, meta, children) => {
      return renderBlock(type, meta, children)
    },
  }
}

const NotionBlockRenderer = ({ data, renderer, debug }) => {
  const { notionPageBlog } = data
  const renderFuncs = mkRenderFuncs(notionPageBlog)
  const child = renderer.render(renderFuncs)
  return (
    <div>
      <Title title={notionPageBlog.title} />
      <div>{child}</div>
      {debug && (
        <div>
          <h2>notionPageBlog:</h2>
          <pre>{JSON.stringify(notionPageBlog, null, '  ')}</pre>
        </div>
      )}
    </div>
  )
}

export default NotionBlockRenderer
