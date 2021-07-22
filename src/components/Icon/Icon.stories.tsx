import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from './Icon'

export default {
  title: 'Utility/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
}

export const Sizes = Template.bind({})
Sizes.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  size: 'sm',
}

export const Variant = Template.bind({})
Variant.args = {
  icon: 'ArchiveIcon',
  type: 'outline',
  variant: 'info',
}

export const Backdrop = Template.bind({})
Backdrop.args = {
  icon: 'ArchiveIcon',
  type: 'solid',
  backdrop: true,
}
