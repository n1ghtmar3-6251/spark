import { IconProps } from '../Types'

export const IdentityFill = ({
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
        '<path d="M21.5 5.5C21.1667 5.16667 20.8333 5 20.3333 5C11.6667 5 11.3333 5 3.66667 5C3.16667 5 2.83333 5.16667 2.5 5.5C2.16667 5.83333 2 6.25 2 6.66667V18.3333C2 18.8333 2.16667 19.1667 2.5 19.5C2.83333 19.8333 3.16667 20 3.66667 20H20.3333C20.75 20 21.1667 19.8333 21.5 19.5C21.8333 19.1667 22 18.75 22 18.3333V6.66667C22 6.25 21.8333 5.83333 21.5 5.5ZM7.83333 10.6667C8.08333 10.4167 8.41667 10.25 8.75 10.25C9.08333 10.25 9.41667 10.4167 9.66667 10.6667C9.91667 10.9167 10.0833 11.25 10.0833 11.6667C10.0833 12.0833 9.91667 12.3333 9.66667 12.6667C9.41667 12.9167 9.08333 13.0833 8.75 13.0833C8.41667 13.0833 8.08333 12.9167 7.83333 12.6667C7.58333 12.4167 7.41667 12.0833 7.41667 11.6667C7.41667 11.25 7.58333 10.9167 7.83333 10.6667ZM11.75 15.8333H5.75V15.5833C5.75 15.3333 5.83333 15.0833 6 14.8333C6.16667 14.5833 6.33333 14.4167 6.58333 14.3333C7 14.1667 7.33333 14.0833 7.75 14C8.08333 13.9167 8.5 13.9167 8.83333 13.9167C9.16667 13.9167 9.5 13.9167 9.83333 14C10.1667 14.0833 10.5833 14.1667 11 14.3333C11.25 14.4167 11.4167 14.5833 11.5833 14.8333C11.75 15.0833 11.8333 15.3333 11.8333 15.5833V15.8333H11.75ZM18 14.1667H14C13.6667 14.1667 13.4167 13.9167 13.4167 13.5833C13.4167 13.25 13.6667 13 14 13H18C18.3333 13 18.5833 13.25 18.5833 13.5833C18.5833 13.9167 18.3333 14.1667 18 14.1667ZM18 11.3333H14C13.6667 11.3333 13.4167 11.0833 13.4167 10.75C13.4167 10.4167 13.6667 10.1667 14 10.1667H18C18.3333 10.1667 18.5833 10.4167 18.5833 10.75C18.5833 11.0833 18.3333 11.3333 18 11.3333Z"/>',
    }}
  />
)

export const tags = ['identity-fill', 'account']
