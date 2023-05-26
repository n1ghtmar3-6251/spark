import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PinFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 9.30094C2.5 4.16417 6.7533 0 12 0C17.2467 0 21.5 4.16417 21.5 9.30094C21.5 10.6638 21.0095 12.2459 20.3427 13.7701C19.664 15.3214 18.7503 16.9291 17.7924 18.3793C16.8354 19.8279 15.8131 21.1515 14.9034 22.1278C14.4511 22.6131 14.0018 23.0395 13.5822 23.3547C13.3726 23.5123 13.1456 23.6609 12.909 23.7745C12.686 23.8816 12.3683 24 12 24C11.6317 24 11.314 23.8816 11.091 23.7745C10.8544 23.6609 10.6274 23.5123 10.4178 23.3547C9.99816 23.0395 9.54888 22.6131 9.09663 22.1278C8.18688 21.1515 7.16456 19.8279 6.20764 18.3793C5.24972 16.9291 4.336 15.3214 3.65732 13.7701C2.99049 12.2459 2.5 10.6638 2.5 9.30094ZM12.0002 11.4846C13.8095 11.4846 15.2763 10.0485 15.2763 8.2771C15.2763 6.50566 13.8095 5.06963 12.0002 5.06963C10.1908 5.06963 8.72407 6.50566 8.72407 8.2771C8.72407 10.0485 10.1908 11.4846 12.0002 11.4846Z"/>',
      }}
    />
  )
)

PinFill.displayName = 'PinFill'

export const tags = ['PinFill', '']