import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Messenger = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.3999C6.36 2.3999 2 6.53006 2 12.1003C2 15.0104 3.19 17.5405 5.14 19.2705C5.3 19.4005 5.4 19.6205 5.41 19.8406L5.46 21.6206C5.5 22.1906 6.07 22.5607 6.59 22.3306L8.57 21.4606C8.74 21.4006 8.93 21.3706 9.1 21.4006C10 21.6706 11 21.8006 12 21.8006C17.64 21.8006 22 17.6705 22 12.1003C22 6.53006 17.64 2.3999 12 2.3999ZM18.5834 9.81593L15.572 14.5668C15.0889 15.3094 14.0611 15.5027 13.3417 14.9432L10.9367 13.1832C10.7208 13.0205 10.4125 13.0205 10.1966 13.1832L6.94883 15.6248C6.51716 15.9605 5.95188 15.4518 6.24994 14.9839L9.26136 10.233C9.74442 9.49039 10.7722 9.2971 11.4917 9.8261L13.8967 11.6166C14.1228 11.7793 14.4209 11.7793 14.6367 11.6166L17.8845 9.17502C18.3162 8.8393 18.8815 9.34796 18.5834 9.81593Z"/>',
      }}
    />
  )
)

Messenger.displayName = 'Messenger'

export const tags = ['Messenger', '']
