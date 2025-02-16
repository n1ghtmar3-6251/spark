import { RadioGroupItem as RadioPrimitive } from '@radix-ui/react-radio-group'
import { useFormFieldControl } from '@spark-ui/form-field'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { RadioIndicator } from './RadioIndicator'
import { radioInputVariants, RadioInputVariantsProps } from './RadioInput.styles'

export interface RadioInputProps
  extends RadioInputVariantsProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * The value given as data when submitted with a name.
   */
  value: string
  /**
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the radio item before the owning form can be submitted.
   */
  required?: boolean
}

export const RadioInput = forwardRef<HTMLButtonElement, RadioInputProps>(
  ({ intent: intentProp, className, ...others }, ref) => {
    const { state } = useFormFieldControl()

    const intent = state ?? intentProp

    return (
      <RadioPrimitive ref={ref} className={radioInputVariants({ intent, className })} {...others}>
        <RadioIndicator intent={intent} forceMount />
      </RadioPrimitive>
    )
  },
)

RadioInput.displayName = 'RadioGroup.RadioInput'
