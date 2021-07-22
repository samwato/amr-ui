import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  
}

export const Sizes = Template.bind({})
Sizes.args = {
  ...Default.args,
  size: 'xl3',
}

export const Variant = Template.bind({})
Variant.args = {
  ...Default.args,
  variant: 'primary',
}
