import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message'
import { Text } from '../Text'
import { iconNamesType } from '../Icon/src/types'

export default {
  title: 'UI/Message',
  component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Default = Template.bind({})
Default.args = {
  message: 'This is a sample message!'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'ExclamationCircleIcon',
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
