import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toggle } from './Toggle'

export default {
  title: 'Form/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Default',
}

export const Theme = Template.bind({})
Theme.args = {
  name: 'Dark',
  darkTheme: true,
}

export const Sizes = Template.bind({})
Sizes.args = {
  name: 'Sizes',
  size: 'sm'
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'Disabled',
  disabled: true
}
