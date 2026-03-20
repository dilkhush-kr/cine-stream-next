

"use client";

import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../components/Navbar";

export default function Favorites() {

  const movies = useSelector((state) => state.favorites.items);

  return (

    <div>

      <Navbar />

      <h2 style={{ padding: "20px" }}>My Favorites</h2>

      <div className="movie-grid">

        {movies.length === 0 ? (
          <p style={{ padding: "20px" }}>No favorites yet</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}

      </div>

    </div>
  );
}