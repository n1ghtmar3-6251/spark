import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BoosterFill = React.forwardRef(
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
          '<path d="M8.638 11.984c0-1.89 1.505-3.422 3.362-3.422 1.857 0 3.362 1.532 3.362 3.422 0 1.89-1.505 3.423-3.362 3.423-1.857 0-3.362-1.533-3.362-3.423Z"/><path fill-rule="evenodd" d="M18.723 14.808v1.027L22 19.172l-2.353.599-.588 2.395-3.362-3.422h-.924l-1.596 1.626c-.673.684-1.681.684-2.354 0l-1.596-1.626h-.925l-3.361 3.422-.588-2.395L2 19.17l3.277-3.336v-1.027l-1.596-1.626a1.675 1.675 0 0 1 0-2.396l1.596-1.625V6.85c0-.942.756-1.712 1.681-1.712h2.269l1.596-1.626c.673-.684 1.681-.684 2.354 0l1.596 1.626h2.269c.925 0 1.68.77 1.68 1.712v2.31l1.597 1.626c.673.599.673 1.711 0 2.395l-1.596 1.626ZM6.957 11.984c0 2.824 2.269 5.134 5.042 5.134 2.773 0 5.042-2.31 5.042-5.134 0-2.823-2.269-5.133-5.042-5.133-2.773 0-5.042 2.31-5.042 5.133Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

BoosterFill.displayName = 'BoosterFill'

export const tags = ['BoosterFill', '']
