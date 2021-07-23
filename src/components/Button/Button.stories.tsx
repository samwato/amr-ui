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
  label: 'Default'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'ExclamationCircleIcon',
  iconStyle: 'outline',
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

export const Type = Template.bind({})
Type.args = {
  ...Default.args,
  style: 'outline',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
