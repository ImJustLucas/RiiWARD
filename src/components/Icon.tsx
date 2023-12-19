import styled from "styled-components";

type IconProps = {
  icon: string;
};

export const Icon: React.FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case "arrow":
      return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
            fill="currentColor"
          ></path>
        </Svg>
      );
    case "link":
      return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"
            fill="currentColor"
          ></path>
        </Svg>
      );
    case "plus":
      return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
            fill="currentColor"
          ></path>
        </Svg>
      );
    case "skip-right":
      return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10.0858 12L5.29291 16.7929L6.70712 18.2071L12.9142 12L6.70712 5.79291L5.29291 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z"
            fill="currentColor"
          ></path>
        </Svg>
      );
  }
};

const Svg = styled.svg`
  height: 32px;
  color: #fff;
`;
