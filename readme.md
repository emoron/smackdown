## Installation

`yarn add @timberio/smackdown`

## Usage

```javascript
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import { duotoneLight } from 'react-syntax-highlighter/styles/prism'
import { Markdown, registerPrism } from '@timberio/smackdown'

// Register the required languages
registerPrism('javascript', javascript)

const syntax = {
  lineNumbers: true,
  theme: duotoneLight,
  renderer: 'prism'
}

// Render in React
<Markdown
  source="# Some markdown stuff"
  syntax={syntax}
/>
```

## Demos & Storybook
[https://smackdown.netlify.com](https://smackdown.netlify.com)