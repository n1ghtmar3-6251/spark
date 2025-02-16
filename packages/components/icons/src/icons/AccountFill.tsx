import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AccountFill = React.forwardRef(
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
          '<path d="M12.1667 2C9.35411 2 7.07407 4.23858 7.07407 7C7.07407 9.76142 9.35411 12 12.1667 12C14.9792 12 17.2593 9.76142 17.2593 7C17.2593 4.23858 14.9792 2 12.1667 2Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3942 14.8918C20.165 16.2454 21.3333 18.3025 21.3333 21C21.3333 21.5523 20.8773 22 20.3148 22H4.01852C3.45601 22 3 21.5523 3 21C3 18.3684 4.17656 16.3355 5.93598 14.9797C7.66972 13.6438 9.93542 12.9856 12.157 12.9649C14.3783 12.9442 16.6519 13.5601 18.3942 14.8918Z"/>',
      }}
    />
  )
)

AccountFill.displayName = 'AccountFill'

export const tags = ['AccountFill', '']
