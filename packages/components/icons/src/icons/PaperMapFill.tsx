import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PaperMapFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7568 6.30961L8.30318 4.55357C8.31639 4.54934 8.32967 4.54537 8.34302 4.54164C8.44251 4.51385 8.54444 4.50012 8.64588 4.5C8.72501 4.4999 8.80455 4.50809 8.88309 4.52483C8.90341 4.52916 8.92361 4.53404 8.94367 4.53949L15.2615 6.23209L20.5606 4.55274C20.895 4.44676 21.2616 4.50242 21.5465 4.70244C21.8314 4.90246 22 5.2226 22 5.56338V17.6797C22 18.1395 21.6948 18.5473 21.2435 18.6903L15.6996 20.4473C15.5631 20.4905 15.4212 20.5068 15.2817 20.4974C15.159 20.5057 15.0342 20.4941 14.9126 20.4615L8.67367 18.79L3.43914 20.4474C3.10474 20.5532 2.73821 20.4975 2.4534 20.2975C2.16859 20.0974 2 19.7773 2 19.4366V7.32034C2 6.86037 2.30537 6.45253 2.7568 6.30961ZM9.28538 16.6166V6.70699L14.73 8.29196V18.2016L9.28538 16.6166Z"/>',
      }}
    />
  )
)

PaperMapFill.displayName = 'PaperMapFill'

export const tags = ['PaperMapFill', '']
