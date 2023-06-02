import styled from "styled-components";
import { nunitoSans } from "@/fonts";

const BannerContainer = styled.div`
  width: 100%;
  height: 568px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(190deg, #000000 0%, rgba(0, 0, 0, 0) 97.67%);
  position: absolute;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  max-width: 500px;
  width: 100%;
  position: relative;
  z-index: 1;

  > p {
    color: white;
    font-family: ${nunitoSans.style.fontFamily};
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.7;
  }

  > image {
    max-width: 213px;
  }
`;

export default BannerContainer;
