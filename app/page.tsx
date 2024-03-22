import Head from "next/head";
import MovieSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-20">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="A simple moviedatabase for users" />
      </Head>
      <main className="container mx-auto  flex flex-col items-center justify-center"></main>
      <h1 className="text-4xl font-bold mb-8 text-white">Movie Database</h1>
      <MovieSearch />
    </div>
  );
}
