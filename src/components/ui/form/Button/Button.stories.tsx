import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from './Button'

export default {
  title: 'ui/form/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>ボタン</Button>

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  size: 's'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'm'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'l'
}
