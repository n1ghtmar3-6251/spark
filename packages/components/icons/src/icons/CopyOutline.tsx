import { IconProps } from '../Types'

export const CopyOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.75922 4.15123C9.65117 4.15123 9.54755 4.19472 9.47114 4.27213C9.39474 4.34954 9.35181 4.45452 9.35181 4.56399V16.3651C9.35181 16.4746 9.39474 16.5796 9.47114 16.657C9.54755 16.7344 9.65117 16.7779 9.75922 16.7779H18.6667C18.7747 16.7779 18.8783 16.7344 18.9547 16.657C19.0311 16.5796 19.0741 16.4746 19.0741 16.3651V7.74484L15.527 4.15123H9.75922ZM8.1093 2.89241C8.54689 2.44907 9.14038 2.20001 9.75922 2.20001H15.9259C16.1813 2.20001 16.4262 2.3028 16.6068 2.48576L20.718 6.65087C20.8985 6.83383 21 7.08198 21 7.34073V16.3651C21 16.9921 20.7542 17.5934 20.3166 18.0367C19.879 18.4801 19.2855 18.7291 18.6667 18.7291H9.75922C9.14038 18.7291 8.54689 18.4801 8.1093 18.0367C7.67172 17.5934 7.42588 16.9921 7.42588 16.3651V4.56399C7.42588 3.93703 7.67172 3.33574 8.1093 2.89241Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.96297 6.36509C5.4948 6.36509 5.92593 6.80189 5.92593 7.3407V19.836C5.92593 19.9455 5.96886 20.0505 6.04526 20.1279C6.12166 20.2053 6.22529 20.2488 6.33334 20.2488H15.926C16.4578 20.2488 16.8889 20.6856 16.8889 21.2244C16.8889 21.7632 16.4578 22.2 15.926 22.2H6.33334C5.7145 22.2 5.12101 21.951 4.68342 21.5076C4.24583 21.0643 4 20.463 4 19.836V7.3407C4 6.80189 4.43113 6.36509 4.96297 6.36509Z"/>',
    }}
  />
)

export const tags = ['copy-outline', 'actions']
