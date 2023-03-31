import { IconProps } from '../Types'

export const CallFill = ({
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
        '<path d="M16.2066 2.80005H18.7926C20.5642 2.80005 22 4.20491 22 5.98607V7.35747C21.9916 9.15536 20.5223 10.602 18.7254 10.602H15.5936L14.1411 11.6808C13.9144 11.848 13.6121 11.8731 13.3518 11.7477 13.0915 11.6222 12.932 11.363 12.932 11.0787V6.06133C12.932 4.26344 14.4014 2.80005 16.2066 2.80005ZM3.84801 6.67504C4.26019 6.26565 4.8179 6.03287 5.4028 6.03287 5.98771 6.03287 6.54542 6.26565 6.95759 6.67504L6.96565 6.68304 9.09397 8.84539C9.49647 9.26148 9.71864 9.8175 9.71864 10.3927 9.71864 10.9679 9.49644 11.5239 9.09394 11.94L9.08266 11.9515C9.06505 11.9691 9.04999 11.9912 9.03936 12.0171 9.0287 12.0429 9.02297 12.0714 9.02297 12.1006 9.02297 12.1298 9.0287 12.1582 9.03936 12.1841 9.04999 12.2099 9.06505 12.232 9.08266 12.2496L9.08786 12.2548 12.4331 15.6535C12.4713 15.6902 12.518 15.7074 12.5625 15.7074 12.6077 15.7074 12.655 15.6898 12.6935 15.652 13.1038 15.2428 13.66 15.01 14.2436 15.01 14.8276 15.01 15.3842 15.2432 15.7946 15.653L15.7971 15.6554 17.9305 17.8001 17.9421 17.812C18.3442 18.2298 18.566 18.7869 18.566 19.3631 18.566 19.9393 18.3442 20.4964 17.9421 20.9142 17.9369 20.9197 17.9316 20.925 17.9262 20.9304L17.4296 21.4237C16.6944 22.1775 15.7235 22.6552 14.6778 22.7721 13.6287 22.8893 12.5736 22.6356 11.6903 22.0567L11.6729 22.0451C8.1529 19.632 5.12036 16.5586 2.73765 12.9911 2.73337 12.9847 2.72916 12.9782 2.72502 12.9717 2.15886 12.0801 1.91342 11.0202 2.02718 9.96951 2.1406 8.92192 2.60482 7.94237 3.34651 7.19575L3.83212 6.69118C3.83736 6.68574 3.84265 6.68036 3.84801 6.67504Z"/>',
    }}
  />
)

export const tags = ['call-fill', 'contact']
