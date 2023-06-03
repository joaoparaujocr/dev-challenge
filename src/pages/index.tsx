import api from "@/api";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import ListMovies from "@/components/ListMovies";
import Movie from "@/interfaces/Movie";
import { GetServerSideProps } from "next";

interface HomeProps {
  movies: Movie[];
}

export const getServerSideProps: GetServerSideProps<{
  movies: Movie[];
}> = async () => {
  const { data: movies } = await api.get("").catch(() => {
    throw new Error("Algo deu errado.");
  });

  return { props: { movies } };
};

export default function Home({ movies }: HomeProps) {
  return (
    <Layout>
      <Banner movie={movies[2]} />
      <ListMovies movies={movies} title="Filmes Legais" />
    </Layout>
  );
}
