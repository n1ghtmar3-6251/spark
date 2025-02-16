import { cx } from 'class-variance-authority'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipLeadingIconProps = ComponentPropsWithoutRef<'span'>

export const ChipLeadingIcon = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ children, className }, forwardedRef) => {
    return (
      <span
        className={cx('mr-sm flex h-full items-center justify-center', className)}
        ref={forwardedRef}
      >
        {children}
      </span>
    )
  }
)

ChipLeadingIcon.displayName = 'Chip.LeadingIcon'
