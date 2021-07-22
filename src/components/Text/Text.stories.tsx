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

export const Tags = Template.bind({})
Tags.args = {
  ...Default.args,
  tag: 'h3',
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
