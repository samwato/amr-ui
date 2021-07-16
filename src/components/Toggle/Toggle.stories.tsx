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
  
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
