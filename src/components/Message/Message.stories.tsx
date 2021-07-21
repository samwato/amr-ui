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

export const Info = Template.bind({})
Info.args = {
  ...Default.args,
  variant: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  ...Default.args,
  variant: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  variant: 'error',
}

export const Success = Template.bind({})
Success.args = {
  ...Default.args,
  variant: 'success',
}
