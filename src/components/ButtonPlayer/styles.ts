import styled, { css } from "styled-components";
import { inter } from "@/fonts";

type ButtonProps = {
  width?: number;
  height?: number;
};

const Button = styled.button<ButtonProps>`
  padding: 11px 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 8px;

  ${({
    theme: {
      color: { purple200, purple400 },
    },
    width,
    height,
  }) => css`
    width: ${width ?? 129}px;
    height: ${height ?? 48}px;
    background: linear-gradient(
      211.43deg,
      ${purple200} 1.97%,
      ${purple400} 98.03%
    );
    color: white;
  `}

  p {
    font-family: ${inter.style.fontFamily};
    font-weight: 600;
  }
`;

export default Button;
