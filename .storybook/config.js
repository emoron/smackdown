import React from 'react'
import { setOptions } from '@storybook/addon-options'
import { setDefaults, withInfo } from '@storybook/addon-info'
import { configure, addDecorator } from '@storybook/react'

const req = require.context('../src', true, /\.stories\.js$/)

setOptions({
  name: '🌲 Timber Smackdown',
  url: 'https://github.com/timberio/smackdown',
  showAddonPanel: false,
})

setDefaults({
  header: false,
  inline: false,
  maxPropsIntoLine: 2,
})

// addDecorator(story => <Theme p={30}>{story()}</Theme>)
// addDecorator((story, context) => withInfo()(story)(context))

configure(() => req.keys().forEach(f => req(f)), module)
