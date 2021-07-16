import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message'

export default {
  title: 'UI/Message',
  component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Default = Template.bind({})
Default.args = {
  message: 'Default Message',
}

export const Info = Template.bind({})
Info.args = {
  message: 'Info Message',
  variant: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'Warning Message',
  variant: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  message: 'Error Message',
  variant: 'error',
}

export const Success = Template.bind({})
Success.args = {
  message: 'Success Message',
  variant: 'success',
}
