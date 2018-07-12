## Installation

`yarn add @timberio/smackdown`

## Usage

```
import javascript from 'react-syntax-highlighter/languages/prism/javascript'
import { duotoneLight } from 'react-syntax-highlighter/styles/prism'
import { Markdown, registerLanguage } from '@timberio/smackdown'

// Register the required languages
registerLanguage('javascript', javascript)

<Markdown source="# Some markdown stuff" />
```

## Demos & Storybook
[https://timber-smackdown.netlify.com](https://timber-smackdown.netlify.com)