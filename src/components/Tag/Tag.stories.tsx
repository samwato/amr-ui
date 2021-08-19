import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag'

export default {
  title: 'UI/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'React'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: 'ExclamationCircleIcon',
  iconStyle: 'outline',
}

export const Variant = Template.bind({})
Variant.args = {
  ...Default.args,
  variant: 'error',
}

export const Removable = Template.bind({})
Removable.args = {
  ...Default.args,
  removable: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
