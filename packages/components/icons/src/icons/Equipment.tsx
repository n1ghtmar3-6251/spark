import { IconProps } from '../Types'

export const Equipment = ({
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
        '<path d="M22.79 19.0694H19.68V4.7734C19.68 4.12494 19.13 3.62613 18.47 3.62613C17.81 3.62613 17.26 4.13492 17.26 4.7734V15.4081C17.01 15.2983 16.75 15.1986 16.48 15.1287L14.53 5.33207C14.14 3.39667 12.35 2 10.27 2H6.39C5.26 2 4.32 2.86793 4.32 3.96532V10.9487H2.94C1.33 10.9487 0 12.1857 0 13.7221V18.6005C0 19.3088 0.4 19.9074 0.97 20.2565C1.37 21.8328 2.88 23 4.66 23C5.57 23 6.39 22.6907 7.04 22.1819H12.92C13.63 22.6808 14.5 23 15.45 23C16.84 23 18.08 22.3615 18.85 21.3739H22.79C23.45 21.3739 24 20.8651 24 20.2266C24 19.5881 23.45 19.0793 22.79 19.0793V19.0694ZM6.74 10.9587V4.30451H10.28C11.21 4.30451 11.99 4.92304 12.16 5.76105L14 15.009H12.44C12.15 15.009 11.84 14.8893 11.52 14.6C11.19 14.3107 10.86 13.8717 10.49 13.2432C9.73 11.9164 8.31 11.0684 6.74 10.9587ZM11.34 19.8774H8.43C8.45 19.7278 8.46 19.5682 8.46 19.4086C8.46 17.4233 6.74 15.8171 4.66 15.8171C3.82 15.8171 3.05 16.0865 2.42 16.5254V13.7221C2.42 13.4727 2.64 13.2432 2.94 13.2432H6.39C7.22 13.2432 7.97 13.6722 8.36 14.3506C8.55 14.6798 8.94 15.3382 9.53 15.9468C10.07 16.4955 10.78 17.0143 11.69 17.2138C11.4 17.7525 11.22 18.361 11.22 19.0095C11.22 19.3188 11.27 19.6081 11.34 19.8874V19.8774ZM4.66 18.1216C5.43 18.1216 6.04 18.7102 6.04 19.4086C6.04 20.1069 5.43 20.6955 4.66 20.6955C3.89 20.6955 3.28 20.1069 3.28 19.4086C3.28 18.7102 3.89 18.1216 4.66 18.1216ZM15.45 20.6955C14.44 20.6955 13.64 19.9273 13.64 18.9995C13.64 18.0717 14.44 17.3036 15.45 17.3036C16.46 17.3036 17.26 18.0717 17.26 18.9995C17.26 19.9273 16.46 20.6955 15.45 20.6955Z"/>',
    }}
  />
)

export const tags = ['equipment', 'categories']