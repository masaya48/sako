import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Direction, Size, Spacer} from './Spacer'

export default {
  title: 'ui/layout/Spacer',
  component: Spacer
} as ComponentMeta<typeof Spacer>

const HorizontalTemplate: ComponentStory<typeof Spacer> = (args) => (
  <div className="flex">
    <div>1</div>
    <div>2</div>
    <Spacer {...args}/>
    <div>3</div>
  </div>
)

export const Horizontal = HorizontalTemplate.bind({})
Horizontal.args = {
  direction: Direction.HORIZONTAL,
  size: Size.MD,
  grow: true,
}

const VerticalTemplate: ComponentStory<typeof Spacer> = (args) => (
  <div>
    <div>1</div>
    <div>2</div>
    <Spacer {...args}/>
    <div>3</div>
  </div>
)

export const Vertical = VerticalTemplate.bind({})
Vertical.args = {
  direction: Direction.VERTICAL,
  size: Size.MD
}
