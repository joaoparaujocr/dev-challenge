import styled from "styled-components";
import { nunitoSans } from "@/fonts";

const FooteContainer = styled.footer`
  display: flex;
  padding: 17px 60px;
  border-top: 1px solid gray;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div:first-of-type {
    color: white;
    display: flex;
    align-items: center;
    gap: 16px;

    p {
      font-family: ${nunitoSans.style.fontFamily};
      font-size: 0.875rem;
    }

    a {
      text-decoration: underline;
      font-family: ${nunitoSans.style.fontFamily};
      font-size: 0.75rem;
    }
  }

  > p {
    font-family: ${nunitoSans.style.fontFamily};
    font-size: 0.75rem;
    color: white;
  }
`;

export default FooteContainer;
