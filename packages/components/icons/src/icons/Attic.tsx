import { IconProps } from '../Types'

export const Attic = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2915 5.27364C12.4262 5.17539 12.6103 5.17539 12.7457 5.27364L15.6888 7.43372V7.01221C15.6888 6.8052 15.8585 6.63719 16.0693 6.63719H18.1343C18.3451 6.63719 18.5147 6.8052 18.5147 7.01221V9.50905L19.847 10.4878C20.0152 10.6116 20.0502 10.8464 19.9246 11.0129C19.8501 11.1119 19.7359 11.1636 19.6195 11.1636C19.5434 11.1636 19.4689 11.1381 19.4027 11.0924V19.4499H19.6195C19.8303 19.4499 20 19.6179 20 19.8249C20 20.0319 19.8303 20.2 19.6195 20.2H5.38044C5.17044 20.2 5 20.0319 5 19.8249C5 19.6179 5.17044 19.4499 5.38044 19.4499H5.59805V11.1111C5.43294 11.1996 5.22674 11.1644 5.11185 11.0129C4.9863 10.8464 5.0213 10.6116 5.18946 10.4878L12.2915 5.27364ZM13.5873 14.7H11.4134V19.4499H13.5873V14.7ZM18.6418 12.2624H6.35893V19.4499H10.6526V14.325C10.6526 14.118 10.8222 13.95 11.033 13.95H13.9677C14.1777 13.95 14.3482 14.118 14.3482 14.325V19.4499H18.6418V12.2624ZM17.5545 13.95C17.7645 13.95 17.9349 14.118 17.9349 14.325V17.4646C18.1092 17.4983 18.2431 17.6431 18.2431 17.8246C18.2431 18.0316 18.0727 18.1996 17.8627 18.1996H15.1813C14.9713 18.1996 14.8009 18.0316 14.8009 17.8246C14.8009 17.6431 14.9348 17.4983 15.109 17.4646V14.325C15.109 14.118 15.2787 13.95 15.4895 13.95H17.5545ZM9.58354 13.95C9.79354 13.95 9.96398 14.118 9.96398 14.325V17.4646C10.1382 17.4983 10.2721 17.6431 10.2721 17.8246C10.2721 18.0316 10.1017 18.1996 9.89169 18.1996H7.21035C6.99959 18.1996 6.82991 18.0316 6.82991 17.8246C6.82991 17.6431 6.96383 17.4983 7.13807 17.4646V14.325C7.13807 14.118 7.30775 13.95 7.51851 13.95H9.58354ZM17.1741 14.7H15.8699V17.4496H17.1741V14.7ZM9.2031 14.7H7.89895V17.4496H9.2031V14.7ZM12.5182 6.04167L6.35893 10.5651V11.5124H18.6418V10.5381L12.5182 6.04167ZM12.5003 7.67291C13.5092 7.67291 14.3302 8.48219 14.3302 9.47672V9.85174H10.6704V9.47672C10.6704 8.48219 11.4914 7.67291 12.5003 7.67291ZM12.5003 8.42293C12.0445 8.42293 11.655 8.7057 11.5013 9.10171H13.4993C13.3456 8.7057 12.9561 8.42293 12.5003 8.42293ZM17.7539 7.38722H16.4497V7.99324L17.7539 8.95103V7.38722Z"/>',
    }}
  />
)

export const tags = ['attic', 'criteria', 'location']