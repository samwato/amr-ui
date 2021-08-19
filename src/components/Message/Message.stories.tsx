import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message'
import { Text } from '../Text'

export default {
  title: 'UI/Message',
  component: Message,
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

const DefaultChildren = [
  <Text tag="h3" size="md" weight="600">High risk of fraud detected</Text>,
  <Text tag="p" size="sm">Before fulfilling this order or capturing payment, please review the Risk Analysis and determine if this order is fraudulent.</Text>
]

export const Default = Template.bind({})
Default.args = {
  children: DefaultChildren
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'ExclamationCircleIcon',
}

export const Variant = Template.bind({})
Variant.args = {
  ...Default.args,
  variant: 'error',
}
