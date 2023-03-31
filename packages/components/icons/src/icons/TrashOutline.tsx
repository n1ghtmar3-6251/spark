import { IconProps } from '../Types'

export const TrashOutline = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9412 6.36668H17.905H16.1131C16.0317 5.28335 15.6244 4.28335 14.8914 3.53335C14.0769 2.70001 13.0181 2.20001 11.8778 2.20001C10.7376 2.20001 9.76018 2.70001 8.9457 3.53335C8.21267 4.28335 7.80543 5.28335 7.72398 6.36668H5.93213H3.97738C3.40724 6.36668 3 6.78335 3 7.36668C3 7.86668 3.40724 8.36668 3.97738 8.36668H5.0362V19.8667C5.0362 20.5333 5.28054 21.1167 5.68778 21.5333C6.09502 21.95 6.66516 22.2 7.31674 22.2H16.6833C17.2534 22.2 17.905 21.95 18.3122 21.5333C18.7195 21.1167 18.9638 20.45 18.9638 19.8667V8.28335H20.0226C20.5113 8.28335 21 7.86668 21 7.28335C20.9186 6.78335 20.5113 6.36668 19.9412 6.36668ZM10.2489 4.86668C10.7376 4.36668 11.3077 4.11668 11.9593 4.11668C12.6109 4.11668 13.181 4.36668 13.6697 4.86668C14.0769 5.28335 14.3213 5.78335 14.3213 6.36668H9.59729C9.67873 5.78335 9.84163 5.28335 10.2489 4.86668ZM17.0091 19.8667C17.0091 19.95 16.9276 20.1167 16.9276 20.2C16.8462 20.2833 16.7647 20.2833 16.6833 20.2833H7.31674C7.23529 20.2833 7.0724 20.2 7.0724 20.2C6.99095 20.1167 6.99095 20.0333 6.99095 19.8667V8.28335H8.70136H15.3801H17.0905V19.8667H17.0091Z"/>',
    }}
  />
)

export const tags = ['trash-outline', 'actions']
