import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShareFill = React.forwardRef(
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
          '<path d="M18.231 2.3999C16.1493 2.3999 14.4617 4.08744 14.4617 6.16913L14.4619 6.2008L7.5446 9.07413C7.01557 8.79113 6.41114 8.63067 5.76923 8.63067C3.68754 8.63067 2 10.3182 2 12.3999C2 14.4816 3.68754 16.1691 5.76923 16.1691C6.41112 16.1691 7.01554 16.0087 7.54456 15.7257L14.4619 18.599C14.4618 18.6096 14.4617 18.6201 14.4617 18.6307C14.4617 20.7124 16.1493 22.3999 18.231 22.3999C20.3127 22.3999 22.0002 20.7124 22.0002 18.6307C22.0002 16.549 20.3127 14.8614 18.231 14.8614C16.8703 14.8614 15.678 15.5825 15.0153 16.6633L9.08232 14.1988C9.3732 13.6642 9.53846 13.0513 9.53846 12.3999C9.53846 11.7485 9.3732 11.1357 9.08233 10.6011L15.0153 8.13658C15.678 9.21737 16.8703 9.93836 18.231 9.93836C20.3127 9.93836 22.0002 8.25082 22.0002 6.16913C22.0002 4.08744 20.3127 2.3999 18.231 2.3999Z"/>',
      }}
    />
  )
)

ShareFill.displayName = 'ShareFill'

export const tags = ['ShareFill', '']
