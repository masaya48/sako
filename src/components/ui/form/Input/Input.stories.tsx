import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Input} from './Input'

const config = {
  title: 'ui/form/Input',
  component: Input
} as ComponentMeta<typeof Input>

export default config

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const Normal = Template.bind({})
Normal.args = {
}
