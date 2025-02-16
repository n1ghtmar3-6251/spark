import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MapCursorFill = React.forwardRef(
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
          '<path d="M21.8723 5.13748C22.0158 4.71798 22.0389 4.26659 21.9388 3.83463C21.8388 3.40267 21.6196 3.00747 21.3063 2.69393C20.993 2.38039 20.598 2.16109 20.1664 2.06097C19.7347 1.96085 19.2836 1.9839 18.8644 2.12753L3.47935 7.48133C3.10817 7.52684 2.76047 7.6951 2.49329 7.96246C2.17744 8.27853 2 8.7072 2 9.15419C2 9.60117 2.17744 10.0298 2.49329 10.3459C2.75973 10.6125 3.10625 10.7806 3.47628 10.8267L10.6506 13.3635L13.2482 20.5276C13.2952 20.896 13.4628 21.2407 13.728 21.5061C14.0438 21.8222 14.4722 21.9998 14.9189 21.9998C15.3656 21.9998 15.794 21.8222 16.1098 21.5061C16.3775 21.2382 16.5458 20.8894 16.5909 20.5171L21.8719 5.13856L21.8723 5.13748Z"/>',
      }}
    />
  )
)

MapCursorFill.displayName = 'MapCursorFill'

export const tags = ['MapCursorFill', '']
