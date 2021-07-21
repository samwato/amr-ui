import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'

export default {
  title: 'UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Example = Template.bind({})
Example.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
}

export const Small = Template.bind({})
Small.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  size: 'lg',
}

export const Info = Template.bind({})
Info.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  variant: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  variant: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  variant: 'error',
}

export const Success = Template.bind({})
Success.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  variant: 'success',
}

export const Backdrop = Template.bind({})
Backdrop.args = {
  icon: 'ArchiveIcon',
  type: 'solid',
  backdrop: true,
}
