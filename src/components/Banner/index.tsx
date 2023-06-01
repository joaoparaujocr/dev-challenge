import BannerContainer, { BannerImage, Infos } from "./styles";
import Image from "next/image";
import Turbo from "./../../../public/imageBanner.svg";
import Fundo from "./../../../public/Fundo.svg";
import ButtonPlayer from "../ButtonPlayer";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src={Fundo}
          alt=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </BannerImage>
      <Infos>
        <Image src={Turbo} alt="" />
        <p>
          Um caracol obcecado por velocidade que sonha em ser o maior piloto de
          carros de corrida do mundo tem sua chance quando um acidente o imbui
          com velocidade de alta octanagem.
        </p>
        <ButtonPlayer />
      </Infos>
    </BannerContainer>
  );
};

export default Banner;
