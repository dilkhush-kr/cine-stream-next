export const dynamic = "force-dynamic";

import { getPopularMovies } from "../lib/tmdb";
import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";

export default async function Home() {

  const movies = await getPopularMovies();

  if (!movies || movies.length === 0) {
    return (
      <div>
        <Navbar />
        <h2 style={{ padding: "20px" }}>⚠️ Unable to load movies</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <MovieGrid movies={movies} />
    </div>
  );
}