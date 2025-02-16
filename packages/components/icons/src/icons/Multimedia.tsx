import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Multimedia = React.forwardRef(
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
          '<path fill-rule="evenodd" d="M6.013 1.064A3.376 3.376 0 0 1 8.458 0h7.083c.918 0 1.797.383 2.446 1.064A3.728 3.728 0 0 1 19 3.633v16.734c0 .477-.09.95-.263 1.39-.174.441-.429.842-.75 1.179a3.452 3.452 0 0 1-1.122.788c-.42.182-.87.276-1.323.276H8.457a3.376 3.376 0 0 1-2.445-1.064A3.728 3.728 0 0 1 5 20.367V3.633c0-.964.364-1.888 1.013-2.569Zm1.38 2.106a1.264 1.264 0 0 0-.087.463v13.004h9.39V3.633c0-.159-.03-.317-.088-.463a1.219 1.219 0 0 0-.25-.393 1.152 1.152 0 0 0-.374-.263c-.14-.06-.29-.092-.441-.092H14.38v.01c0 .321-.121.63-.338.856-.216.228-.509.355-.815.355h-2.453c-.306 0-.6-.127-.815-.355a1.243 1.243 0 0 1-.338-.856v-.01H8.458c-.15 0-.3.031-.44.092s-.268.15-.375.263a1.217 1.217 0 0 0-.25.393Zm-.087 17.197v-1.308h9.388v1.308c0 .321-.121.63-.337.856-.216.227-.51.355-.816.355H8.458c-.15 0-.3-.031-.44-.092s-.268-.15-.375-.263a1.215 1.215 0 0 1-.25-.393 1.264 1.264 0 0 1-.087-.463Zm5.224.413a.75.75 0 1 0-1.06-1.06.75.75 0 0 0 1.06 1.06Z" clip-rule="evenodd"/>',
      }}
    />
  )
)

Multimedia.displayName = 'Multimedia'

export const tags = ['Multimedia', '']
