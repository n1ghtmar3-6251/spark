import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ImageFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0569 15.369C19.2332 15.1899 18.3915 15.0993 17.546 15.0997C16.1363 15.0968 14.7389 15.3441 13.4184 15.8285C13.0799 15.4697 12.7165 15.1322 12.3299 14.8185C10.273 13.1495 7.69117 12.265 5.04394 12.322C4.68089 12.3214 4.31822 12.3374 3.95705 12.3699V4.96094C3.95705 4.73083 4.14346 4.54428 4.37342 4.54428H19.6405C19.8705 4.54428 20.0569 4.73083 20.0569 4.96094V15.369ZM19.6405 22.5997H15.3415C15.3292 22.5999 15.3169 22.5999 15.3047 22.5997H4.37342C3.07033 22.5997 2.01396 21.5426 2.01396 20.2386V13.6518C1.99493 13.5403 1.99577 13.4297 2.01396 13.3239V4.96094C2.01396 3.65695 3.07033 2.59985 4.37342 2.59985H19.6405C20.9436 2.59985 22 3.65695 22 4.96094V20.2386C22 21.5426 20.9436 22.5997 19.6405 22.5997ZM15.116 6.07205C13.238 6.07205 11.7156 7.59551 11.7156 9.47479C11.7156 11.3541 13.238 12.8775 15.116 12.8775C16.994 12.8775 18.5164 11.3541 18.5164 9.47479C18.5164 7.59551 16.994 6.07205 15.116 6.07205Z"/>',
      }}
    />
  )
)

ImageFill.displayName = 'ImageFill'

export const tags = ['ImageFill', '']
