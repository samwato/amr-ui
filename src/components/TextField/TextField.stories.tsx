import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField'

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    onChange: {
      action: 'onchange'
    }
  }
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'firstname',
  name: 'firstname',
  type: 'text',
  label: 'Firstname',
  placeholder: 'Firstname',
  align: 'left',
  size: 'sm',
}

export const Number = Template.bind({})
Number.args = {
  ...Default.args,
  type: 'number',
  value: 234142,
  align: 'right',
}

export const Search = Template.bind({})
Search.args = {
  ...Default.args,
  type: 'search',
}

export const PrefixSuffix = Template.bind({})
PrefixSuffix.args = {
  ...Default.args,
  type: 'number',
  prefix: '$',
  suffix: '˚C',
  align: 'left',
}

export const Required = Template.bind({})
Required.args = {
  ...Default.args,
  required: true,
  value: '',
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  error: 'Something is wrong',
}
