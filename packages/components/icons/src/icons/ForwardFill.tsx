import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ForwardFill = React.forwardRef(
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
          '<path d="M14.7841 3.6974C14.4981 3.40693 14.0679 3.32004 13.6943 3.47724C13.3206 3.63444 13.077 4.00477 13.077 4.41556V7.61867H12.6923C8.80248 7.61867 6.43728 9.63698 4.91764 12.145C3.7394 14.0895 3.02669 16.4121 2.45125 18.2873C2.31144 18.7429 2.17972 19.1721 2.0514 19.5631C1.90964 19.995 2.06822 20.47 2.43943 20.7253C2.81063 20.9805 3.30374 20.9537 3.64597 20.6596C4.25361 20.1375 4.78177 19.6717 5.2539 19.2553C6.41296 18.2331 7.23439 17.5087 8.06508 16.9797C9.12847 16.3024 10.175 15.978 12 15.978H13.077V19.1812C13.077 19.6007 13.331 19.9771 13.7164 20.1284C14.1017 20.2797 14.539 20.1748 14.8169 19.8643L21.7399 12.13C22.099 11.7288 22.0846 11.112 21.7071 10.7286L14.7841 3.6974Z"/>',
      }}
    />
  )
)

ForwardFill.displayName = 'ForwardFill'

export const tags = ['ForwardFill', '']
