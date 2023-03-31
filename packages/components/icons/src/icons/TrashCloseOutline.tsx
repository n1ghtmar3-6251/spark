import { IconProps } from '../Types'

export const TrashCloseOutline = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1121 6.36668H16.3184C16.2377 5.28335 15.8341 4.28335 15.1076 3.53335C14.3004 2.70001 13.1704 2.20001 12.0404 2.20001C10.9103 2.20001 9.78027 2.70001 8.97309 3.53335C8.24664 4.28335 7.76233 5.28335 7.76233 6.36668H3.96861C3.40359 6.36668 3 6.78335 3 7.36668C3 7.86668 3.40359 8.36668 3.96861 8.36668H5.01794V19.8667C5.01794 20.5333 5.26009 21.1167 5.66368 21.5333C6.06726 21.95 6.713 22.2 7.27803 22.2H16.722C17.3677 22.2 17.9327 21.95 18.3363 21.5333C18.7399 21.1167 18.9821 20.45 18.9821 19.8667V8.28335H20.0314C20.5157 8.28335 21 7.86668 21 7.28335C21 6.78335 20.5964 6.36668 20.1121 6.36668ZM10.2646 4.86668C10.7489 4.36668 11.3139 4.11668 11.9596 4.11668C12.6054 4.11668 13.2511 4.36668 13.6547 4.86668C14.0583 5.28335 14.3004 5.78335 14.3004 6.36668H9.61883C9.69955 5.78335 9.9417 5.28335 10.2646 4.86668ZM17.1256 19.8667C17.1256 19.95 17.0448 20.1167 17.0448 20.2C16.9641 20.2833 16.8834 20.2833 16.722 20.2833H7.27803C7.19731 20.2833 7.03587 20.2 6.95516 20.2C6.87444 20.1167 6.87444 20.0333 6.87444 19.8667V8.28335H17.1256V19.8667Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1076 11.5333C14.704 11.1167 14.139 11.1167 13.7354 11.5333L12.0404 13.2833L10.3453 11.5333C9.9417 11.1167 9.37668 11.1167 8.97309 11.5333C8.56951 11.95 8.56951 12.5333 8.97309 12.95L10.6682 14.7L8.97309 16.45C8.56951 16.8667 8.56951 17.45 8.97309 17.8667C9.37668 18.2833 9.9417 18.2833 10.3453 17.8667L12.0404 16.1167L13.7354 17.8667C14.139 18.2833 14.704 18.2833 15.1076 17.8667C15.5112 17.45 15.5112 16.8667 15.1076 16.45L13.4126 14.7L15.1076 12.95C15.4305 12.5333 15.4305 11.8667 15.1076 11.5333Z"/>',
    }}
  />
)

export const tags = ['trash-close-outline', 'actions']