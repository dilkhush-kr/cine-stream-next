"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

export default function MovieGrid({ movies }) {

  const [query,setQuery] = useState("");

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return(

    <div>

      <SearchBar query={query} setQuery={setQuery} />

      <div className="movie-grid">

        {filtered.map(movie=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}

      </div>

    </div>

  )
}