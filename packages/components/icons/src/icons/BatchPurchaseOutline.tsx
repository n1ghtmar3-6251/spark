import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const BatchPurchaseOutline = React.forwardRef(
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
          '<path d="M20.8776 2.375H8.54612C7.34978 2.375 6.3375 3.37382 6.3375 4.55425V5.09906H3.20862C2.01228 5.09906 1 6.09788 1 7.2783V19.4458C1 20.6262 2.01228 21.625 3.20862 21.625H15.5401C16.7364 21.625 17.7487 20.6262 17.7487 19.4458V18.9009H20.7856C21.9819 18.9009 22.9942 17.9021 22.9942 16.7217V4.55425C23.0862 3.28302 22.0739 2.375 20.8776 2.375ZM13.5155 4.55425H15.8162V8.45873H13.5155V4.55425ZM15.5401 19.4458H3.20862V7.2783H6.24547V16.7217C6.24547 17.9021 7.25776 18.9009 8.45409 18.9009H15.5401V19.4458ZM20.8776 16.7217H8.54612V4.55425H11.3989V9.00354C11.3989 9.45755 11.583 9.82075 11.8591 10.184C12.1351 10.5472 12.5953 10.638 13.0554 10.638H16.4603C16.9205 10.638 17.2886 10.4564 17.6567 10.184C17.8407 9.82075 18.0248 9.36674 18.0248 8.91274V4.55425H20.8776V16.7217Z"/><path d="M19.1291 13.9976H16.3683C15.7241 13.9976 15.264 14.4517 15.264 15.0873C15.264 15.7229 15.7241 16.1769 16.3683 16.1769H19.1291C19.7733 16.1769 20.2334 15.7229 20.2334 15.0873C20.2334 14.4517 19.7733 13.9976 19.1291 13.9976Z"/>',
      }}
    />
  )
)

BatchPurchaseOutline.displayName = 'BatchPurchaseOutline'

export const tags = ['BatchPurchaseOutline', '']
