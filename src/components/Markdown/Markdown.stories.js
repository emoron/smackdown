import React from 'react'
import { storiesOf } from '@storybook/react'

import javascript from 'react-syntax-highlighter/languages/hljs/javascript'
import { duotoneLight } from 'react-syntax-highlighter/styles/prism'
import { timber } from '../../themes'
import { registerLanguage } from '../../utils'
import Markdown from './Markdown'

// Annoyingly we can't override storybook's markdown->html parsing
// so we're just using a different extension and loading the contents raw
import basicExample from './examples/basic.mkd'
import syntaxExample from './examples/syntax.mkd'
import inlineExample from './examples/inline.mkd'

// Register the necessary languages for this example
registerLanguage('javascript', javascript)

storiesOf('Markdown', module)
  .add('Basic', () => {
    return (
      <div>
        <Markdown source={basicExample} />
      </div>
    )
  })
  .add('Syntax Highlighting', () => {
    return (
      <div>
        <Markdown source={syntaxExample} />
      </div>
    )
  })
  .add('Themes', () => {
    return (
      <div>
        <Markdown
          source={syntaxExample}
          syntax={{
            theme: duotoneLight,
          }}
        />
      </div>
    )
  })
  .add('Custom Theme', () => {
    return (
      <div>
        <Markdown
          source={syntaxExample}
          syntax={{
            lineNumbers: true,
            theme: timber,
          }}
        />
      </div>
    )
  })
  .add('Line Numbers', () => {
    return (
      <div>
        <Markdown
          source={syntaxExample}
          syntax={{
            lineNumbers: true,
            theme: duotoneLight,
          }}
        />
      </div>
    )
  })
  .add('Inline Code', () => {
    return (
      <div>
        <Markdown
          source={inlineExample}
          syntax={{
            lineNumbers: true,
            theme: duotoneLight,
            inlineStyle: {
              background: '#EEEAFE',
              color: '#5742CA',
            }
          }}
        />
      </div>
    )
  })
