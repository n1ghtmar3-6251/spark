import { IconProps } from '../Types'

export const OfferOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.47692 3.96348L4.69944 4.69944L3.96348 9.47692L14.5323 20.0458C14.5467 20.0601 14.5661 20.0681 14.5863 20.0681C14.6066 20.0681 14.626 20.0601 14.6403 20.0458L20.0458 14.6403C20.0601 14.626 20.0681 14.6066 20.0681 14.5863C20.0681 14.5661 20.0601 14.5467 20.0458 14.5323L9.47692 3.96348ZM9.51707 2.00503C9.7349 1.98695 9.95401 2.01779 10.1584 2.09531C10.3585 2.1712 10.5394 2.28995 10.6887 2.44316L21.4122 13.1667C21.7883 13.5433 22 14.0541 22 14.5863C22 15.1185 21.7888 15.629 21.4127 16.0055L16.0059 21.4122C15.6294 21.7883 15.1185 22 14.5863 22C14.0541 22 13.5437 21.7888 13.1671 21.4127L2.44316 10.6887C2.28995 10.5394 2.1712 10.3585 2.09531 10.1584C2.01779 9.95401 1.98695 9.7349 2.00503 9.51707C2.00689 9.4946 2.00954 9.47219 2.01298 9.44991L2.82749 4.16248C2.85971 3.81998 3.01036 3.49866 3.25451 3.25451C3.49866 3.01036 3.81998 2.85971 4.16248 2.82749L9.44991 2.01298C9.47219 2.00954 9.4946 2.00689 9.51707 2.00503Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.32394 7.98477C6.32394 7.06752 7.06752 6.32394 7.98477 6.32394C8.90203 6.32394 9.64561 7.06752 9.64561 7.98477C9.64561 8.90203 8.90203 9.64561 7.98477 9.64561C7.06752 9.64561 6.32394 8.90203 6.32394 7.98477Z"/>',
    }}
  />
)

export const tags = ['offer-outline', 'account']
