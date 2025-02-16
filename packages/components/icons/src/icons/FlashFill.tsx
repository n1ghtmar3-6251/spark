import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlashFill = React.forwardRef(
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
          '<path d="M13.1535 2.58359L5.31119 13.0049C4.57598 13.922 5.2295 15.3393 6.37318 15.3393H9.88589L9.31405 20.4248C9.15067 21.8421 10.9479 22.5925 11.7648 21.4253L19.6888 10.9206C20.424 10.0036 19.7705 8.66963 18.6268 8.66963H15.1141L15.6859 3.58404C15.7676 2.75033 15.1958 2.16674 14.4606 2H14.0521C13.7254 2.08337 13.3986 2.25011 13.1535 2.58359Z"/>',
      }}
    />
  )
)

FlashFill.displayName = 'FlashFill'

export const tags = ['FlashFill', '']
