import React, {forwardRef} from 'react'
import {classNames} from '@utils/classNames'

type Props = React.ComponentProps<'input'> & {
  error: boolean
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, Props>(
  ({error, ...props}, ref) => (
    <input {...props} ref={ref} className={classNames(baseClassNames, error && errorClassNames)}/>
  )
)

const baseClassNames = 'py-sm px-md border border-slate-700 rounded-md outline-cyan-500'

const errorClassNames = 'border-red-700 outline-red-700 bg-red-100 outline-1'
