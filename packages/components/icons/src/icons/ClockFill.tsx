import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ClockFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M12 2C6.47155 2 2 6.45344 2 11.9595C2 17.4656 6.47155 22 12 22C17.5285 22 22 17.5466 22 12.0405C22 6.53441 17.5285 2 12 2ZM16.1463 16.8178C15.9837 16.9798 15.7398 17.0607 15.4959 17.0607C15.252 17.0607 14.9268 16.9798 14.7642 16.7368L11.187 12.6073C11.0244 12.4453 10.9431 12.2024 10.9431 11.9595V8.47773C10.9431 7.91093 11.3496 7.50607 11.9187 7.50607C12.4878 7.50607 12.8943 7.91093 12.8943 8.47773V11.5547L16.2276 15.3603C16.6341 15.8462 16.5528 16.4939 16.1463 16.8178Z"/>',
      }}
    />
  )
)

ClockFill.displayName = 'ClockFill'

export const tags = ['ClockFill', '']
