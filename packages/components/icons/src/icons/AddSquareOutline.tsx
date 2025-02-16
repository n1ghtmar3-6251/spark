import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddSquareOutline = React.forwardRef(
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
          '<path d="M12 7.127c.557 0 1.009.452 1.009 1.01v3.14h3.14a1.01 1.01 0 0 1 0 2.018h-3.14v3.14a1.009 1.009 0 1 1-2.018 0v-3.14H7.85a1.009 1.009 0 1 1 0-2.018h3.14v-3.14c0-.558.452-1.01 1.009-1.01Z"/><path fill-rule="evenodd" d="M7.159 2.286A5.159 5.159 0 0 0 2 7.445v9.682c0 2.85 2.31 5.159 5.159 5.159h9.682c2.85 0 5.159-2.31 5.159-5.159V7.445c0-2.85-2.31-5.16-5.159-5.16H7.16ZM4.018 7.445a3.14 3.14 0 0 1 3.14-3.141h9.683a3.14 3.14 0 0 1 3.141 3.14v9.683a3.14 3.14 0 0 1-3.14 3.141H7.158a3.14 3.14 0 0 1-3.141-3.14V7.444Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

AddSquareOutline.displayName = 'AddSquareOutline'

export const tags = ['AddSquareOutline', '']
