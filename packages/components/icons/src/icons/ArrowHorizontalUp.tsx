import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ArrowHorizontalUp = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9.19421L3.89679 16.6996C3.46287 17.1001 2.75935 17.1001 2.32544 16.6996C1.89152 16.2991 1.89152 15.6497 2.32544 15.2492L10.6662 7.52448C10.8362 7.36111 11.0398 7.23057 11.2652 7.14051C11.4972 7.04782 11.7472 7 12 7C12.2528 7 12.5028 7.04782 12.7348 7.14051C12.9602 7.23057 13.1638 7.36111 13.3338 7.52448L21.6746 15.2492C22.1085 15.6497 22.1085 16.2991 21.6746 16.6996C21.2406 17.1001 20.5371 17.1001 20.1032 16.6996L12 9.19421Z"/>',
      }}
    />
  )
)

ArrowHorizontalUp.displayName = 'ArrowHorizontalUp'

export const tags = ['ArrowHorizontalUp', '']
