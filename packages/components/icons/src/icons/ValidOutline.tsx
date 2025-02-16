import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ValidOutline = React.forwardRef(
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
          '<path d="M17.2898 9.34304C17.6468 8.92164 17.5945 8.29063 17.1731 7.93364C16.7517 7.57665 16.1207 7.62887 15.7638 8.05027L10.411 14.3689L8.30366 11.9735C7.93886 11.5589 7.30699 11.5185 6.89233 11.8833C6.47768 12.2481 6.43726 12.8799 6.80206 13.2946L9.155 15.9691C9.31357 16.1526 9.51064 16.299 9.73222 16.3978C9.95438 16.4969 10.1957 16.5457 10.4388 16.5408C10.6777 16.5372 10.9131 16.4827 11.1293 16.3809C11.3473 16.2782 11.5407 16.1299 11.6963 15.9458L17.2898 9.34304Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.19971C6.47715 2.19971 2 6.67686 2 12.1997C2 17.7226 6.47715 22.1997 12 22.1997C17.5228 22.1997 22 17.7226 22 12.1997C22 6.67686 17.5228 2.19971 12 2.19971ZM4 12.1997C4 7.78143 7.58172 4.19971 12 4.19971C16.4183 4.19971 20 7.78143 20 12.1997C20 16.618 16.4183 20.1997 12 20.1997C7.58172 20.1997 4 16.618 4 12.1997Z"/>',
      }}
    />
  )
)

ValidOutline.displayName = 'ValidOutline'

export const tags = ['ValidOutline', '']
