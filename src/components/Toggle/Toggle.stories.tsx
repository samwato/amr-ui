import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toggle } from './Toggle'

export default {
  title: 'UI/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Default',
}

export const Small = Template.bind({})
Small.args = {
  name: 'Small',
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  name: 'Medium',
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  name: 'Large',
  size: 'lg'
}
