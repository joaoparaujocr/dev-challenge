import api from "@/api";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import Movie from "@/interfaces/Movie";
import { GetServerSideProps } from "next";

interface HomeProps {
  movies: Movie[];
}

export const getServerSideProps: GetServerSideProps<{
  movies: Movie[];
}> = async () => {
  const { data: movies } = await api.get("");

  return { props: { movies } };
};

export default function Home({ movies }: HomeProps) {
  console.log(movies);

  return (
    <Layout>
      <Banner movie={movies[2]} />
    </Layout>
  );
}
