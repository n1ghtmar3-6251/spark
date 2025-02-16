import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'
import { useInputGroup } from './InputGroupContext'

export type InputTrailingAddonProps = InputAddonProps

const Root = forwardRef<HTMLDivElement, InputTrailingAddonProps>(
  ({ className, ...others }, ref) => {
    const { disabled, readOnly } = useInputGroup()
    const isInactive = disabled || readOnly

    return (
      <div className={cx('rounded-r-lg', isInactive ? 'bg-on-surface/dim-5' : null)}>
        <InputAddon
          ref={ref}
          className={cx(className, 'ml-[-1px] !rounded-l-none rounded-r-lg')}
          {...others}
        />
      </div>
    )
  },
)

export const InputTrailingAddon = Object.assign(Root, {
  id: 'TrailingAddon',
})

InputTrailingAddon.displayName = 'InputGroup.TrailingAddon'
