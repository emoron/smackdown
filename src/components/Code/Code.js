import React from 'react'
import Highlight from 'react-syntax-highlighter/light'
import Prism from 'react-syntax-highlighter/prism-light'
import { atomDark } from 'react-syntax-highlighter/styles/prism'

const Code = props => {
  const {
    children,
    renderer,
    className,
    theme,
    lineNumbers,
    lineNumberStyle,
    inlineStyle,
  } = props

  if (!className) {
    return (
      <code style={inlineStyle}>
        {children}
      </code>
    )
  }

  const language = className
    ? className.split('-')[1]
    : null

  const Syntax = renderer === 'highlight'
    ? Highlight
    : Prism

  return (
    <Syntax
      style={theme}
      language={language}
      showLineNumbers={lineNumbers}
      lineNumberStyle={lineNumberStyle}
      useInlineStyles
    >
      {children}
    </Syntax>
  )
}

Code.defaultProps = {
  theme: atomDark,
  lineNumbers: false,
  lineNumberStyle: { opacity: 0.3 },
  inlineStyle: {},
  renderer: 'prism',
}

export default Code
