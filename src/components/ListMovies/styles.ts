import styled from "styled-components";
import { nunitoSans } from "@/fonts";

type ContainerProps = {
  top?: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  position: relative;
  top: ${({ top }) => top ?? 0};
  gap: 10px;

  > p {
    font-family: ${nunitoSans.style.fontFamily};
    font-weight: 700;
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    padding: 0 24px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  a {
    position: relative;
    max-width: 293px;
    width: 100%;
    min-width: 151px;

    img {
      width: 100%;
      height: 100%;
    }

    > div {
      width: 100%;
      height: 6px;
      background-color: rgba(3, 3, 3, 0.36);
      position: absolute;
      bottom: 0;
      left: 0;

      span {
        display: flex;
        height: 8px;
        width: 50%;
        background-color: ${({
          theme: {
            color: { purple400 },
          },
        }) => purple400};
      }
    }
  }

  @media (max-width: 735px) {
    justify-content: center;
    align-items: center;
  }
`;
