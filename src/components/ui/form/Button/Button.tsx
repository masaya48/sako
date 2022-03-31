import React, {ComponentPropsWithoutRef, FC} from 'react'
import {classNames} from '@utils/classNames'

type Size = 's' | 'm' | 'l' | 'full'
type Color = 'primary' | 'secondary' | 'default'

type Props = ComponentPropsWithoutRef<'button'> & {
  size: Size
  color: Color
}

export const Button: FC<Props> = ({
  children,
  size = 'm',
  color = 'default',
  ...props
}) =>
  <button
    {...props}
    className={classNames(baseClassNames, sizeClassNames[size], colorClassNames[color])}
  >{children}</button>

const baseClassNames = 'py-sm px-md rounded-md border-solid shadow-lg text-bold border hover:opacity-75 text-sm'

const sizeClassNames: Record<Size, string> = {
  s: 'w-24',
  m: 'w-32',
  l: 'w-64',
  full: 'w-full'
}

const colorClassNames: Record<Color, string> = {
  primary: 'bg-cyan-400 text-white border-cyan-400',
  secondary: 'bg-orange-400 text-white border-orange-400',
  default: 'text-slate-700 border-slate-700'
}
