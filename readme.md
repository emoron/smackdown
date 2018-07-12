## Installation

`yarn add @timberio/smackdown`

## Usage

```javascript
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import { duotoneLight } from 'react-syntax-highlighter/styles/prism'
import { Markdown, registerLanguage } from '@timberio/smackdown'

// Register the required languages
registerLanguage('javascript', javascript)

// Render in React
<Markdown source="# Some markdown stuff" />
```

## Demos & Storybook
[https://smackdown.netlify.com](https://smackdown.netlify.com)