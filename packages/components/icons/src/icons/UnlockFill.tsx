import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const UnlockFill = React.forwardRef(
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
          '<path d="M15.5928 8.91642H6.11573V7.84142C6.11573 6.81642 6.51973 5.84976 7.25197 5.12476C7.98422 4.39976 8.97738 3.99976 10.0042 3.99976C10.5176 4.01642 11.0142 4.09142 11.4855 4.29142C11.9569 4.49142 12.3777 4.76642 12.7312 5.12476C13.1184 5.51642 13.758 5.52476 14.162 5.14142C14.566 4.75809 14.566 4.12476 14.1789 3.72476C13.6318 3.17476 12.9837 2.74142 12.2683 2.44142C11.5444 2.14142 10.8122 2.00809 10.0042 1.99976C8.4303 1.99976 6.94056 2.60809 5.82956 3.71642C4.71015 4.81642 4.09574 6.29142 4.09574 7.84976V8.95809C2.91741 9.10809 2 10.0998 2 11.3081V19.6164C2 20.9331 3.07733 21.9998 4.40715 21.9998H15.5928C16.9227 21.9998 18 20.9331 18 19.6164V11.3081C18 9.99142 16.9227 8.92476 15.5928 8.92476V8.91642ZM9.91163 17.7664C8.80063 17.7664 7.89164 16.8664 7.89164 15.7664C7.89164 14.6664 8.80063 13.7664 9.91163 13.7664C11.0226 13.7664 11.9316 14.6664 11.9316 15.7664C11.9316 16.8664 11.0226 17.7664 9.91163 17.7664Z"/>',
      }}
    />
  )
)

UnlockFill.displayName = 'UnlockFill'

export const tags = ['UnlockFill', '']
