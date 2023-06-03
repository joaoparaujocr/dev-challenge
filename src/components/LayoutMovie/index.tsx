import Movie from "@/interfaces/Movie";
import Image from "next/image";
import { BannerImage, ContainerHeader, Infos } from "./styles";
import Free from "./../.././../public/free.svg";
import BackButton from "@/Icons/BackButton";
import ButtonPlayer from "../ButtonPlayer";
import { useRouter } from "next/router";
import formatterHours from "@/utils/fomatterTime";

interface LayoutMovieProps {
  movie: Movie;
}

export function LayoutMovie({
  movie: { banner, logo, description, durationInMinutes },
}: LayoutMovieProps) {
  const router = useRouter();
  const durationFormatter = formatterHours(durationInMinutes);

  const handleGoBack = () => router.back();

  return (
    <>
      <ContainerHeader>
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
        <button onClick={handleGoBack}>
          <BackButton />
        </button>

        <Image width={188} height={195} src={logo} alt="" />
      </ContainerHeader>
      <Infos>
        <div>
          <div className="durationAndClassication">
            <span>
              <p>Duração</p>
              <p>{durationFormatter}</p>
            </span>
            <Image src={Free} width={40} height={40} alt="" />
          </div>

          <ButtonPlayer />
        </div>

        <p>{description}</p>
      </Infos>
    </>
  );
}
