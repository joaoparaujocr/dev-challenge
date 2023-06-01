import BannerContainer, { BannerImage, Infos } from "./styles";
import Image from "next/image";
import Turbo from "./../../../public/imageBanner.svg";
import Fundo from "./../../../public/Fundo.svg";
import ButtonPlayer from "../ButtonPlayer";
import Movie from "@/interfaces/Movie";

interface BannerProps {
  movie: Movie;
}

const Banner = ({ movie: { banner, logo, description } }: BannerProps) => {
  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src={banner}
          alt=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </BannerImage>
      <Infos>
        <Image src={logo} width={213} height={110} alt="" />
        <p>{description}</p>
        <ButtonPlayer />
      </Infos>
    </BannerContainer>
  );
};

export default Banner;
