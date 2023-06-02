import styled, { css } from "styled-components";
import { nunitoSans } from "@/fonts";

type HeaderProps = {
  menuIsVisible: boolean;
};

const Header = styled.header<HeaderProps>`
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

  @media (max-width: 700px) {
    padding-right: 24px;
  }

  nav {
    ul {
      list-style-type: none;
      display: flex;
      color: white;
      gap: 32px;
      font-family: ${nunitoSans.style.fontFamily};
      font-size: 1rem;
      font-weight: 400;
    }

    a:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    button {
      display: none;
    }

    @media (max-width: 700px) {
      ${({ menuIsVisible }) => css`
        button {
          display: inline-block;
          position: fixed;
          z-index: 5;
          top: 22px;
          left: 10px;
          padding: 10px;
          background: none;
          border: none;
          display: flex;
          cursor: pointer;

          span {
            width: 24px;
            border-bottom: ${!menuIsVisible ? css`2px solid white` : css`none`};

            &::before,
            ::after {
              content: "";
              height: 2px;
              background-color: white;
              width: 24px;
              display: block;
              margin-bottom: 6px;
              position: relative;
              transition: 0.5s;
            }

            ${menuIsVisible &&
            css`
              &::before {
                top: 8px;
                transform: rotate(135deg);
              }
              &::after {
                transform: rotate(-135deg);
              }
            `}
          }
        }

        ul {
          width: 40%;
          flex-direction: column;
          align-items: start;
          padding-left: 24px;
          padding-top: 100px;
          position: fixed;
          top: 0;
          left: 0;
          display: ${menuIsVisible ? "flex" : "none"};
          background-color: rgba(3, 3, 3, 0.79);
          height: 300px;
          border-radius: 0 0 140px 0;
          transition: 1s;
        }
      `}
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
