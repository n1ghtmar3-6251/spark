import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SendOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.601 14.1656C21.0207 13.9653 21.3743 13.6542 21.6216 13.2678C21.8689 12.8814 22 12.4351 22 11.9798C22 11.5244 21.8689 11.0781 21.6216 10.6917C21.3743 10.3053 21.0207 9.99421 20.601 9.79387L4.85294 2.36737C4.54384 2.13059 4.16046 2 3.76326 2C3.29561 2 2.84712 2.18102 2.51645 2.50324C2.18577 2.82546 2 3.26249 2 3.71818C2 4.10418 2.13329 4.47679 2.37505 4.77757L5.90887 11.9844L2.43411 19.2265C2.19443 19.5266 2.06234 19.8976 2.06234 20.2818C2.06234 20.7375 2.24811 21.1745 2.57879 21.4968C2.90946 21.819 3.35796 22 3.8256 22C4.22358 22 4.60769 21.8689 4.91712 21.6312L20.6 14.1661L20.601 14.1656ZM18.126 10.8536L4.47851 4.41774L7.63431 10.8536H18.126ZM7.7605 12.8582L4.53413 19.5826L18.6609 12.8582H7.7605Z"/>',
      }}
    />
  )
)

SendOutline.displayName = 'SendOutline'

export const tags = ['SendOutline', '']
