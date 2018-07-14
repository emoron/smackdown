import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Wrapper } from './styles'
import Code from '../Code'
import Header from './overrides/Header'

const Smackdown = props => {
  const options = {
    overrides: {
      code: {
        component: Code,
        props: props.syntax,
      },
      h1: {
        component: Header,
        props: { level: 1 },
      },
      h2: {
        component: Header,
        props: { level: 2 },
      },
      h3: {
        component: Header,
        props: { level: 3 },
      },
      h4: {
        component: Header,
        props: { level: 4 },
      },
      h5: {
        component: Header,
        props: { level: 5 },
      },
      h6: {
        component: Header,
        props: { level: 6 },
      },
      ...props.overrides,
    },
  }

  return (
    <Wrapper>
      <Markdown options={options}>
        {props.source}
      </Markdown>
    </Wrapper>
  )
}

Smackdown.defaultProps = {}

export default Smackdown
