import styled from "styled-components";
import { inter } from "@/fonts";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 578px;
  position: relative;
  display: flex;

  button {
    position: relative;
    background-color: black;
    border-radius: 50%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border: 0;
    top: 32px;
    left: 32px;
    cursor: pointer;
  }

  > img {
    position: absolute;
    z-index: 3;
    bottom: 60px;
    left: 60px;

    @media (max-width: 700px) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  font-family: ${inter.style.fontFamily};
  gap: 24px;

  div:first-of-type {
    display: flex;
    justify-content: space-between;

    .durationAndClassication {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;

      span {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 4px;

        p:first-of-type {
          font-size: 1rem;
          font-weight: 400;
          color: #999999;
        }

        p:nth-of-type(2) {
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
  }

  p:last-of-type {
    font-weight: 500;
    font-size: 1.125rem;
    color: white;
  }

  @media (max-width: 700px) {
    padding: 42px 24px;
  }
`;
