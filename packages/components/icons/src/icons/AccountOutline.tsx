import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AccountOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1666 4.19176C10.5665 4.19176 9.24077 5.44922 9.24077 7.03416 9.24077 8.6191 10.5665 9.87656 12.1666 9.87656 13.7667 9.87656 15.0924 8.6191 15.0924 7.03416 15.0924 5.44922 13.7667 4.19176 12.1666 4.19176ZM6.9385 7.03416C6.9385 4.269 9.26341 2 12.1666 2 15.0697 2 17.3946 4.269 17.3946 7.03416 17.3946 9.79932 15.0697 12.0683 12.1666 12.0683 9.26341 12.0683 6.9385 9.79932 6.9385 7.03416ZM12.1667 15.5693C10.3149 15.5693 8.5355 16.2797 7.2209 17.5496 6.21346 18.5228 5.54228 19.7636 5.28346 21.1023 5.16837 21.6975 4.56821 22.0913 3.94296 21.9817 3.31771 21.8721 2.90413 21.3008 3.01922 20.7056 3.36026 18.9416 4.24552 17.3013 5.58111 16.0112 7.3248 14.3268 9.69336 13.3775 12.1667 13.3775 14.64 13.3775 17.0085 14.3268 18.7522 16.0112 20.0878 17.3013 20.9731 18.9416 21.3141 20.7056 21.4292 21.3008 21.0156 21.8721 20.3904 21.9817 19.7651 22.0913 19.165 21.6975 19.0499 21.1023 18.7911 19.7636 18.1199 18.5228 17.1124 17.5496 15.7978 16.2797 14.0184 15.5693 12.1667 15.5693Z"/>',
      }}
    />
  )
)

AccountOutline.displayName = 'AccountOutline'

export const tags = ['AccountOutline', '']