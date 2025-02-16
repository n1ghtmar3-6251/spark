import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AlarmFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4359 4.22578C15.4871 4.5608 16.4535 5.14528 17.2472 5.94226C18.5496 7.25001 19.2805 9.02273 19.2805 10.8702C19.2805 13.6731 19.7548 15.2202 20.244 16.1186C20.6359 16.8383 20.826 17.7194 20.502 18.5102C20.1417 19.3896 19.2959 19.815 18.3492 19.815H15.4143L15.4131 19.8198C15.2356 20.5013 14.8368 21.1048 14.2793 21.5355C13.7218 21.9663 13.0371 22.2 12.3325 22.2C11.6279 22.2 10.9432 21.9663 10.3857 21.5355C9.82818 21.1048 9.42942 20.5013 9.25189 19.8198L9.25067 19.815H6.31546C5.36991 19.815 4.52363 19.3911 4.16376 18.5109C3.84052 17.7203 4.03198 16.8401 4.42314 16.1216C4.91152 15.2244 5.38518 13.6772 5.38518 10.8702C5.38518 9.02273 6.11606 7.25001 7.41849 5.94226C8.21216 5.14534 9.17849 4.56089 10.2296 4.22586C10.2705 3.10006 11.1964 2.19995 12.3327 2.19995C13.469 2.19995 14.3949 3.10002 14.4359 4.22578Z"/>',
      }}
    />
  )
)

AlarmFill.displayName = 'AlarmFill'

export const tags = ['AlarmFill', '']
