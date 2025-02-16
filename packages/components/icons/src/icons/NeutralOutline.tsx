import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const NeutralOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.05 10.85C15.7917 10.85 16.4 10.25 16.4 9.5 16.4 8.75 15.8 8.15 15.05 8.15 14.3 8.15 13.7 8.75 13.7 9.5 13.7 10.25 14.3 10.85 15.05 10.85ZM16.85 14.4583H7.15C6.6 14.4583 6.15 14.9083 6.15 15.4583 6.15 16.0083 6.6 16.4583 7.15 16.4583H16.8417C17.3917 16.4583 17.8417 16.0083 17.8417 15.4583 17.8417 14.9083 17.3917 14.4583 16.8417 14.4583H16.85Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM12 20C7.58333 20 4 16.4167 4 12C4 7.58333 7.58333 4 12 4C16.4167 4 20 7.58333 20 12C20 16.4167 16.4167 20 12 20Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.95 10.85C9.69167 10.85 10.3 10.25 10.3 9.5C10.3 8.75 9.7 8.15 8.95 8.15C8.2 8.15 7.6 8.75 7.6 9.5C7.6 10.25 8.2 10.85 8.95 10.85Z"/>',
      }}
    />
  )
)

NeutralOutline.displayName = 'NeutralOutline'

export const tags = ['NeutralOutline', '']
