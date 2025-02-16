import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowHorizontalDown = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.32544 7.30343C2.75935 6.89886 3.46287 6.89886 3.89679 7.30343L12 14.7836L20.1032 7.30343C20.5371 6.89886 21.2406 6.89886 21.6746 7.30343C22.1085 7.70801 22.1085 8.36396 21.6746 8.76853L13.3338 16.4702C13.1638 16.6352 12.9602 16.7671 12.7348 16.8581C12.5028 16.9517 12.2528 17 12 17C11.7472 17 11.4972 16.9517 11.2652 16.8581C11.0399 16.7671 10.8363 16.6353 10.6662 16.4702L2.32544 8.76853C1.89152 8.36396 1.89152 7.70801 2.32544 7.30343Z"/>',
      }}
    />
  )
)

ArrowHorizontalDown.displayName = 'ArrowHorizontalDown'

export const tags = ['ArrowHorizontalDown', '']
