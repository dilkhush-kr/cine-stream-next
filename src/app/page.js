// "use client";

// import { useEffect,useState } from "react";
// import MovieCard from "../components/MovieCard";
// import Navbar from "../components/Navbar";
// import SearchBar from "../components/SearchBar";

// export default function Home(){

//   const [movies,setMovies] = useState([]);
//   const [filtered,setFiltered] = useState([]);

//   useEffect(()=>{

//     const fetchMovies = async ()=>{

//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
//       );

//       const data = await res.json();

//       setMovies(data.results);
//       setFiltered(data.results);
//     };

//     fetchMovies();

//   },[]);

//   const handleSearch = (query)=>{

//     const result = movies.filter(movie =>
//       movie.title.toLowerCase().includes(query.toLowerCase())
//     );

//     setFiltered(result);
//   }

//   return(

//     <div>

//       <Navbar/>

//       <SearchBar onSearch={handleSearch}/>

//       <div className="movie-grid">

//         {filtered.map(movie=>(
//           <MovieCard key={movie.id} movie={movie}/>
//         ))}

//       </div>

//     </div>

//   )
// }





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