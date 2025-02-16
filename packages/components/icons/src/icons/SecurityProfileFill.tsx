import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SecurityProfileFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2518 2.18538C12.5492 1.9382 11.784 1.93821 11.0814 2.18539L5.18486 4.25985C3.87287 4.72142 2.96983 5.97217 3.00077 7.39285C3.06971 10.5587 3.43005 13.4549 5.27853 16.4514C6.77478 18.8769 8.9048 20.7596 11.3998 21.8416L11.4038 21.8433C11.8934 22.0522 12.4398 22.0522 12.9294 21.8433L12.9334 21.8416C15.4306 20.7587 17.5621 18.8737 19.0586 16.4452C20.9065 13.4462 21.2641 10.5572 21.3326 7.39301C21.3633 5.97236 20.4604 4.7214 19.1482 4.25976L13.2518 2.18538ZM12.2848 19.0366C10.3163 19.0367 7.95407 16.9859 7.16667 15.345C9.13517 13.7044 14.647 13.2943 17.1667 15.345C16.6155 16.5756 14.647 19.0367 12.2848 19.0366ZM15.0833 8.99135C15.0833 10.5111 13.8708 11.7431 12.375 11.7431C10.8792 11.7431 9.66667 10.5111 9.66667 8.99135C9.66667 7.47161 10.8792 6.23962 12.375 6.23962C13.8708 6.23962 15.0833 7.47161 15.0833 8.99135Z"/>',
      }}
    />
  )
)

SecurityProfileFill.displayName = 'SecurityProfileFill'

export const tags = ['SecurityProfileFill', '']
