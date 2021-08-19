import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button'
import { ButtonGroup } from './ButtonGroup'

export default {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />

const ChildrenButtons = [
  <Button label="Close" variant="outline"/>,
  <Button label="Cancel" variant="outline"/>,
  <Button label="Submit" variant="outline"/>,
]

const ChildrenFullwidthButtons = [
  <Button label="Cancel" variant="outline" fullwidth={true}/>,
  <Button label="Submit" fullwidth={true}/>,
]

export const Default = Template.bind({})
Default.args = {
  children: ChildrenButtons
}

export const Joined = Template.bind({})
Joined.args = {
  ...Default.args,
  joined: true,
}

export const JustifyContentVariant = Template.bind({})
JustifyContentVariant.args = {
  ...Default.args,
  justifyContent: 'between',
}

export const WithFullwidthButton = Template.bind({})
WithFullwidthButton.args = {
  ...Default.args,
  children: ChildrenFullwidthButtons,
}
