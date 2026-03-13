
export const dynamic = "force-dynamic";

import { getPopularMovies } from "../lib/tmdb";
import Navbar from "../components/Navbar";
import MovieGrid from "../components/MovieGrid";

export default async function Home(){

  const movies = await getPopularMovies();

  return(

    <div>

      <Navbar/>

      <MovieGrid movies={movies}/>

    </div>

  )

}