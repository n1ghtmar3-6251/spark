import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BookmarkOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.44253C5 3.54118 6.53298 2 8.42391 2H16.5761C18.467 2 20 3.54118 20 5.44253V21.0164C20 21.3994 19.7789 21.7475 19.4333 21.9087C19.0878 22.0698 18.6806 22.0146 18.3898 21.7673L12.5 16.7563L6.61016 21.7673C6.31938 22.0146 5.91221 22.0698 5.56666 21.9087C5.2211 21.7475 5 21.3994 5 21.0164V5.44253ZM8.42391 3.96721C7.61345 3.96721 6.95652 4.62773 6.95652 5.44253V18.8956L11.8681 14.717C12.2328 14.4067 12.7672 14.4067 13.1319 14.717L18.0435 18.8956V5.44253C18.0435 4.62773 17.3865 3.96721 16.5761 3.96721H8.42391Z"/>',
      }}
    />
  )
)

BookmarkOutline.displayName = 'BookmarkOutline'

export const tags = ['BookmarkOutline', '']
