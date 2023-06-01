import styled from "styled-components";
import { nunitoSans } from "@/fonts";

const Header = styled.header`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.73) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 20px 60px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    color: white;
    gap: 32px;
    font-family: ${nunitoSans.style.fontFamily};
    font-size: 1rem;
    font-weight: 400;

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    gap: 27px;
    align-items: center;
    cursor: pointer;

    > div {
      border-radius: 50%;
      background-color: #bdbdbd;
      width: 40px;
      height: 40px;
      color: white;
      text-align: center;
      line-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Header;
