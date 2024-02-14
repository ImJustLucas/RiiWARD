import styled from "styled-components";

export const AvatarRounded: React.FC<{
  src: string;
  alt: string;
  size: number;
}> = ({ src, alt, size }) => {
  return (
    <AvatarRoundedContainer
      className="AvatarRounded"
      src={src}
      alt={alt}
      size={size}
    />
  );
};

const AvatarRoundedContainer = styled.img<{
  size: number;
}>`
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
