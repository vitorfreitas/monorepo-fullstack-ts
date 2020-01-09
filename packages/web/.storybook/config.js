import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyles from '../src/globalStyles'

addDecorator(story => (
  <>
    <GlobalStyles />

    {story()}
  </>
))

// automatically import all files ending in *.stories.js
configure(
  require.context(
    '../src',
    true,
    /\.stories\.js$|\/stories\/.*\.js$|\/stories\/.*\.ts$|\/stories\/.*\.tsx$/
  ),
  module
)
