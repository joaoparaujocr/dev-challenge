import api from "@/api";
import Footer from "@/components/Footer";
import { LayoutMovie } from "@/components/LayoutMovie";
import ListMovies from "@/components/ListMovies";
import Movie from "@/interfaces/Movie";
import { GetStaticProps } from "next";

interface MovieProps {
  movie: Movie;
  movies: Movie[];
}

export default function Movie({ movie, movies }: MovieProps) {
  return (
    <>
      <LayoutMovie movie={movie} />
      <ListMovies movies={movies} title="Outros Filmes legais" />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params?.id;

  const { data: movie } = await api.get(`/${id}`).catch(() => {
    throw new Error("Algo deu errado.");
  });

  const { data: movies } = await api.get<Movie[]>("").catch(() => {
    throw new Error("Algo deu errado.");
  });

  return {
    props: {
      movie,
      movies,
    },
  };
};
