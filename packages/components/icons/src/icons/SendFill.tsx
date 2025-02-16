import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SendFill = React.forwardRef(
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
          '<path d="M5.52941 11.1667H22C21.916 11 21.8319 10.8333 21.7479 10.6667 21.4958 10.25 21.1597 10 20.7395 9.75L4.85714 2.33333C4.60504 2.16667 4.18487 2 3.76471 2 3.34454 2 2.84034 2.16667 2.5042 2.5 2.16807 2.83333 2 3.25 2 3.75 2 4.08333 2.16807 4.5 2.42017 4.75L5.52941 11.1667ZM2.42017 19.25C2.16807 19.5833 2.08403 19.9167 2.08403 20.3333 2.08403 20.75 2.2521 21.25 2.58824 21.5833 2.92437 21.8333 3.34454 22 3.84874 22 4.26891 22 4.60504 21.8333 4.94118 21.6667L20.7395 14.1667C21.1597 14 21.4958 13.6667 21.7479 13.25 21.8319 13.0833 21.916 13 22 12.8333H5.52941L2.42017 19.25Z"/>',
      }}
    />
  )
)

SendFill.displayName = 'SendFill'

export const tags = ['SendFill', '']
