import { IconProps } from '../Types'

export const EyeOffFill = ({
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
        '<path d="M21.52 10.5058C21.2 10.0811 20.72 9.57137 20.16 9.06166 19.92 8.80681 19.44 8.80681 19.2 9.06166L11.12 17.217C10.8 17.4719 10.8 17.9816 11.12 18.3214 11.28 18.4913 11.52 18.5762 11.76 18.5762 11.84 18.5762 11.84 18.5762 11.92 18.5762H12.48C14.56 18.5762 16.48 17.7267 18 16.6223 19.52 15.6029 20.8 14.3287 21.52 13.4791 21.84 13.0544 22.08 12.5447 22.08 12.035 22.08 11.4403 21.92 10.8456 21.52 10.5058ZM20.48 3.45487C20.16 3.11506 19.76 3.11506 19.44 3.45487L16.64 6.51312C15.36 5.83351 13.92 5.40875 12.48 5.40875 10.4 5.40875 8.48 6.25827 6.96 7.36263 5.44 8.38205 4.16 9.65632 3.44 10.5058 3.12 10.9306 2.88 11.4403 2.88 11.95 2.88 12.4597 3.04 13.0544 3.44 13.3942 4.48 14.6685 5.76 15.6879 7.04 16.6223L4.48 19.3408C4.16 19.6806 4.16 20.1054 4.48 20.4452 4.8 20.785 5.2 20.785 5.52 20.4452L20.48 4.47428C20.8 4.21943 20.8 3.70972 20.48 3.45487ZM10.08 13.3942C9.84 12.9694 9.68001 12.4597 9.68001 11.95 9.68001 11.1854 10 10.4209 10.48 9.91118 10.96 9.40147 11.68 9.06166 12.4 9.06166 12.88 9.06166 13.36 9.23157 13.76 9.48642L10.08 13.3942Z"/>',
    }}
  />
)

export const tags = ['eye-off-fill', 'actions']