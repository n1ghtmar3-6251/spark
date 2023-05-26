import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HotelFill = React.forwardRef(
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
          '<path d="M2.94643 5.99976C2.68471 5.99976 2.45276 6.08482 2.27008 6.26073C2.08778 6.43627 2 6.65946 2 6.91113V18.0884C2 18.3401 2.08777 18.5633 2.26966 18.7393L2.2705 18.7401C2.45325 18.9152 2.68508 18.9998 2.94643 18.9998C3.20778 18.9998 3.4396 18.9152 3.62236 18.7401L3.62319 18.7393C3.80509 18.5633 3.89286 18.3401 3.89286 18.0884V16.3172H20.1071V18.0884C20.1071 18.3401 20.1949 18.5633 20.3768 18.7393L20.3776 18.7401C20.5604 18.9152 20.7922 18.9998 21.0536 18.9998C21.3149 18.9998 21.5467 18.9152 21.7295 18.7401L21.7303 18.7393C21.9122 18.5633 22 18.3401 22 18.0884V11.1585C22 10.2303 21.6564 9.43135 20.975 8.77516C20.2936 8.11898 19.4639 7.78812 18.5 7.78812H12.6964C12.244 7.78812 11.8514 7.94353 11.5335 8.25028C11.215 8.55642 11.0536 8.93443 11.0536 9.37013V14.4945H3.89286V6.91113C3.89286 6.65946 3.80507 6.43627 3.62278 6.26073C3.4401 6.08482 3.20814 5.99976 2.94643 5.99976Z"/><path d="M7.35714 8.63759C6.62764 8.63759 6.00249 8.8814 5.49779 9.368C4.99247 9.85401 4.73929 10.456 4.73929 11.1585C4.73929 11.861 4.99251 12.4631 5.49791 12.9491C6.00259 13.4356 6.6277 13.6794 7.35714 13.6794C8.08665 13.6794 8.7118 13.4356 9.21649 12.949C9.72182 12.463 9.975 11.861 9.975 11.1585C9.975 10.456 9.72184 9.85407 9.21657 9.36808C8.71186 8.88142 8.08668 8.63759 7.35714 8.63759Z"/>',
      }}
    />
  )
)

HotelFill.displayName = 'HotelFill'

export const tags = ['HotelFill', '']