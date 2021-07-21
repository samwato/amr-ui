import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text'

export default {
  title: 'UI/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => 
  <Text {...args}>
    This is some basic paragraph text.
  </Text>

export const Default = Template.bind({})
Default.args = {}

export const Heading1 = Template.bind({})
Heading1.args = {
  ...Default.args,
  tag: 'h1',
  size: 'xl3'
}

export const Heading2 = Template.bind({})
Heading2.args = {
  ...Default.args,
  tag: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  ...Default.args,
  tag: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  ...Default.args,
  tag: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  ...Default.args,
  tag: 'h5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  ...Default.args,
  tag: 'h6',
}

export const Dark = Template.bind({})
Dark.args = {
  ...Default.args,
  theme: 'dark',
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
