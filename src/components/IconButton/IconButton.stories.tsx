import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton'

export default {
  title: 'UI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: "TrashIcon"
}

export const Sizes = Template.bind({})
Sizes.args = {
  ...Default.args,
  size: 'sm',
}

export const Variant = Template.bind({})
Variant.args = {
  ...Default.args,
  variant: 'error',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
