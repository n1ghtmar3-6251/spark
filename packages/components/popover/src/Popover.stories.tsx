import { Button } from '@spark-ui/button'
import { Radio, RadioGroup } from '@spark-ui/radio'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Popover } from '.'
import { type ContentProps } from './PopoverContent'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
      <Popover>
        <Popover.Trigger asChild>
          <Button>Trigger popover</Button>
        </Popover.Trigger>
        <Popover.Content sideOffset={5}>some text</Popover.Content>
      </Popover>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="gap-lg mb-lg flex">
        <Button onClick={() => setOpen(true)}>Open popover</Button>
        <Button onClick={() => setOpen(false)}>Close popover</Button>
      </div>
      <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
        <Popover open={open}>
          <Popover.Anchor asChild>
            <p>Popover is attached to this text (anchor)</p>
          </Popover.Anchor>
          <Popover.Content onInteractOutside={() => setOpen(false)}>some text</Popover.Content>
        </Popover>
      </div>
    </>
  )
}

export const Positionning: StoryFn = _args => {
  const [currentSide, setCurrentSide] = useState<ContentProps['side']>('bottom')
  const [currentAlign, setCurrentAlign] = useState<ContentProps['align']>('center')

  const handleChangeSide = (side: string) => {
    setCurrentSide(side as ContentProps['side'])
  }

  const handleChangeAlign = (align: string) => {
    setCurrentAlign(align as ContentProps['align'])
  }

  return (
    <div className="gap-lg flex flex-col">
      <div className="gap-lg flex">
        <p className="text-headline-2">Side:</p>
        <RadioGroup value={currentSide} onValueChange={handleChangeSide} orientation="horizontal">
          {['bottom', 'top', 'left', 'right'].map(side => (
            <Radio key={side} value={side}>
              {side}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="gap-lg flex">
        <p className="text-headline-2">Align:</p>
        <RadioGroup value={currentAlign} onValueChange={handleChangeAlign} orientation="horizontal">
          {['start', 'center', 'end'].map(align => (
            <Radio value={align}>{align}</Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="h-sz-240 bg-primary-container border-md border-primary flex items-center justify-center rounded-sm border-dashed">
        <Popover open>
          <Popover.Trigger asChild>
            <Button>Trigger popover</Button>
          </Popover.Trigger>
          {/* <Popover.Portal> */}
          <Popover.Content sideOffset={5} side={currentSide} align={currentAlign}>
            some text
            {/* <Popover.Close
          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[5px] top-[5px] inline-flex h-[25px] w-[25px] cursor-default items-center justify-center rounded-full outline-none focus:shadow-[0_0_0_2px]"
          aria-label="Close"
        >
          <Cross2Icon />
        </Popover.Close> */}
            {/* <Popover.Arrow className="fill-white" /> */}
          </Popover.Content>
          {/* </Popover.Portal> */}
        </Popover>
      </div>
    </div>
  )
}

/**
 * - Controlled
 * - Modal behaviour
 * - Showcase event handlers
 * - Side + sideOffset + align + alignOffset (using radios or dropdowns)
 * - custom container + collision behaviour
 * - Arrow story
 * - Close button story
 *
 * Anchor story
 *
 * TODO LIST:
 * - Implement Popover.Close
 * - Implement Popover.Anchor
 * - Implement Popover.Arrow
 * - Implement Popover.Overlay (not in radix ? v2 ?)
 * - couple Popover.Content with Portal (implement `forceMount`)
 */
