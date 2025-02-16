import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PaperMapOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.543 4.70244C21.8301 4.90246 22 5.2226 22 5.56338V17.6797C22 18.1395 21.6924 18.5473 21.2377 18.6903L15.6511 20.4473C15.4441 20.5123 15.2218 20.5173 15.012 20.4615L8.72505 18.79L3.45022 20.4474C3.11325 20.5532 2.74389 20.4975 2.45689 20.2975C2.16989 20.0974 2 19.7773 2 19.4366V7.32034C2 6.86037 2.30772 6.45253 2.76263 6.30961L8.35462 4.55265C8.56147 4.48766 8.78366 4.48274 8.99341 4.5385L15.2802 6.20991L20.5495 4.55274C20.8865 4.44676 21.2559 4.50242 21.543 4.70244ZM14.2006 8.1295L9.80484 6.96085V16.8705L14.2006 18.0392V8.1295ZM16.4134 17.9698L19.7872 16.9088V7.03021L16.4134 8.09123V17.9698ZM7.592 16.9085V7.02977L4.21285 8.09147V17.9702L7.592 16.9085Z"/>',
      }}
    />
  )
)

PaperMapOutline.displayName = 'PaperMapOutline'

export const tags = ['PaperMapOutline', '']
