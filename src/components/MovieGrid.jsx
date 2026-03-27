
"use client";

import React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import RatingFilter from "./RatingFilter";

export default function MovieGrid({ movies }) {

  const { search, rating } = useSelector((state) => state.filter);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(search.toLowerCase()) &&
        movie.vote_average >= rating
      );
    });
  }, [movies, search, rating]);

  return (

    <div>

      <SearchBar />
      <RatingFilter />

      <div className="movie-grid">

        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

    </div>

  );
}