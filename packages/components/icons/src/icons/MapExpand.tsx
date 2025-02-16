import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MapExpand = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4616 3.99976C14.9094 3.99976 14.4616 3.55204 14.4616 2.99976C14.4616 2.44747 14.9094 1.99976 15.4616 1.99976H21C21.5523 1.99976 22 2.44746 22 2.99975L22.0001 8.5382C22.0001 9.09049 21.5524 9.53821 21.0001 9.53821C20.4478 9.53822 20.0001 9.09051 20.0001 8.53823L20.0001 5.41394L14.7841 10.6299C14.3936 11.0205 13.7604 11.0205 13.3699 10.6299C12.9793 10.2394 12.9793 9.60625 13.3699 9.21572L18.5858 3.99976H15.4616ZM10.6302 13.3696C11.0207 13.7601 11.0207 14.3933 10.6302 14.7838L5.41422 19.9997L8.53846 19.9997C9.09074 19.9997 9.53846 20.4475 9.53846 20.9997C9.53846 21.552 9.09075 21.9997 8.53846 21.9997L3 21.9998C2.73479 21.9998 2.48043 21.8944 2.29289 21.7069C2.10536 21.5193 2 21.265 2 20.9998V15.4613C2 14.909 2.44772 14.4613 3 14.4613C3.55228 14.4613 4 14.909 4 15.4613V18.5855L9.21597 13.3696C9.60649 12.9791 10.2397 12.9791 10.6302 13.3696Z"/>',
      }}
    />
  )
)

MapExpand.displayName = 'MapExpand'

export const tags = ['MapExpand', '']
