import Movie from "@/interfaces/Movie";
import { Container, List } from "./styles";
import Image from "next/image";
import Link from "next/link";

interface ListMoviesProps {
  movies: Movie[];
  title: string;
  topDistance?: number;
}

const ListMovies = ({ movies, title, topDistance }: ListMoviesProps) => {
  return (
    <Container top={topDistance}>
      <p>{title}</p>
      <List>
        {movies.map(({ id, cover }) => {
          return (
            <Link key={id} href={`/movie/${id}/`}>
              <Image alt="" src={cover} width={100} height={100} />
              <div>
                <span />
              </div>
            </Link>
          );
        })}
      </List>
    </Container>
  );
};

export default ListMovies;
