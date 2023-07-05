import { forwardRef, PropsWithChildren } from 'react'

import { floatingLabelStyles, FloatingLabelStylesProps } from './FloatingLabel.styles'
import { Label, LabelProps } from './Label'

export type FloatingLabelProps = LabelProps & FloatingLabelStylesProps

export const FloatingLabel = forwardRef<HTMLLabelElement, PropsWithChildren<FloatingLabelProps>>(
  (
    {
      className,
      isExpanded = false,
      hasLeftAddon = false,
      isLeftElementVisible = false,
      isDisabled = false,
      ...others
    },
    ref
  ) => (
    <Label
      ref={ref}
      className={floatingLabelStyles({
        className,
        isExpanded,
        hasLeftAddon,
        isLeftElementVisible,
        isDisabled,
      })}
      {...others}
    />
  )
)

FloatingLabel.displayName = 'FloatingLabel'
