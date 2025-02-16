import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Wardrobe = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6152 5.19995C17.8276 5.19995 18 5.36795 18 5.57495V18.0925C18 18.0992 17.9962 18.1045 17.9962 18.1105C17.9962 18.1165 18 18.1217 18 18.1277V19.825C18 20.032 17.8276 20.2 17.6152 20.2H6.38481C6.1724 20.2 6 20.032 6 19.825V18.1277C6 18.1217 6.00308 18.1165 6.00308 18.1105L6 18.0925V5.57495C6 5.36795 6.1724 5.19995 6.38481 5.19995H17.6152ZM17.2304 18.5027H6.76963V19.45H17.2304V18.5027ZM17.2304 5.94995H12.3848V17.7175H17.2304V5.94995ZM11.6152 5.94995H6.76963V17.7175H11.6152V5.94995ZM13.3062 10.8752C13.5186 10.8752 13.691 11.0432 13.691 11.2502V12.9827C13.691 13.1897 13.5186 13.3577 13.3062 13.3577C13.0938 13.3577 12.9214 13.1897 12.9214 12.9827V11.2502C12.9214 11.0432 13.0938 10.8752 13.3062 10.8752ZM10.6936 10.8755C10.9061 10.8755 11.0785 11.0435 11.0785 11.2505V12.983C11.0785 13.19 10.9061 13.358 10.6936 13.358C10.4812 13.358 10.3088 13.19 10.3088 12.983V11.2505C10.3088 11.0435 10.4812 10.8755 10.6936 10.8755Z"/>',
      }}
    />
  )
)

Wardrobe.displayName = 'Wardrobe'

export const tags = ['Wardrobe', '']
