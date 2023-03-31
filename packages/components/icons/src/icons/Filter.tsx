import { IconProps } from '../Types'

export const Filter = ({
  title,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.89444 12.3145 7.89444C12.7657 9.37558 14.1304 10.4521 15.7438 10.4521 17.3573 10.4521 18.722 9.37558 19.1732 7.89444L21 7.89444C21.5523 7.89444 22 7.44193 22 6.88372 22 6.32552 21.5523 5.87301 21 5.87301H19.2062C18.7922 4.33274 17.3989 3.20001 15.7438 3.20001 14.0888 3.20001 12.6955 4.33274 12.2815 5.87301H3C2.44772 5.87301 2 6.32552 2 6.88372 2 7.44193 2.44772 7.89444 3 7.89444ZM15.7438 5.22145C14.867 5.22145 14.1562 5.93985 14.1562 6.82604 14.1562 7.71224 14.867 8.43064 15.7438 8.43064 16.6206 8.43064 17.3314 7.71224 17.3314 6.82604 17.3314 5.93985 16.6206 5.22145 15.7438 5.22145ZM21 16.0056 11.6855 16.0056C11.2343 14.5244 9.86961 13.4479 8.25617 13.4479 6.64272 13.4479 5.27803 14.5244 4.82685 16.0056L3 16.0056C2.44772 16.0056 2 16.4581 2 17.0163 2 17.5745 2.44772 18.027 3 18.027H4.79378C5.20782 19.5673 6.60112 20.7 8.25616 20.7 9.91121 20.7 11.3045 19.5673 11.7185 18.027L21 18.027C21.5523 18.027 22 17.5745 22 17.0163 22 16.4581 21.5523 16.0056 21 16.0056ZM8.25616 18.6786C9.13296 18.6786 9.84375 17.9602 9.84375 17.074 9.84375 16.1878 9.13296 15.4694 8.25616 15.4694 7.37937 15.4694 6.66858 16.1878 6.66858 17.074 6.66858 17.9602 7.37937 18.6786 8.25616 18.6786Z"/>',
    }}
  />
)

export const tags = ['filter', 'actions']