import styled from "styled-components";
import { nunitoSans } from "@/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  position: relative;
  top: -100px;

  > p {
    font-family: ${nunitoSans.style.fontFamily};
    font-weight: 700;
    color: white;
    font-size: 1.5rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;

  a {
    max-width: 293px;
    width: 100%;
    min-width: 151px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 735px) {
    justify-content: center;
    align-items: center;
  }
`;
