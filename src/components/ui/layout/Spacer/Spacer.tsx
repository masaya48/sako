import React, {VFC} from 'react'
import {classNames} from "../../../../utils/classNames";

export type Props = {
  size?: Size
  grow?: boolean
  direction?: Direction
}

export enum Direction {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum Size {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

const directionClassNames :Record<Direction, string> = {
  [Direction.HORIZONTAL]: `inline-block h-auto`,
  [Direction.VERTICAL]: `block w-full `
}

const sizeClassNames: Record<Size, Record<Direction, string>> = {
  [Size.SM]: {
    [Direction.HORIZONTAL]: 'w-sm',
    [Direction.VERTICAL]: 'h-sm'
  },
  [Size.MD]: {
    [Direction.HORIZONTAL]: 'w-md',
    [Direction.VERTICAL]: 'h-md'
  },
  [Size.LG]: {
    [Direction.HORIZONTAL]: 'w-lg',
    [Direction.VERTICAL]: 'h-lg'
  },
  [Size.XL]: {
    [Direction.HORIZONTAL]: 'w-xl',
    [Direction.VERTICAL]: 'h-xl'
  },
}

export const Spacer: VFC<Props> = ({
  size = Size.MD,
  grow = false,
  direction = Direction.VERTICAL,
}) => <div className={classNames(
  grow ? 'grow' : 'grow-0',
  directionClassNames[direction],
  sizeClassNames[size][direction])}
/>
