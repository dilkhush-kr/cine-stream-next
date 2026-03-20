


"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../app/features/favoritesSlice.js";

export default function MovieCard({ movie }) {

  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);

  const isFav = favorites.find((m) => m.id === movie.id);

  const toggleFav = (e) => {
    e.preventDefault();

    if (isFav) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="movie-card">

        <img src={image} alt={movie.title} />

        <h3>{movie.title}</h3>

        <p>{movie.release_date?.slice(0, 4)}</p>

        <p>⭐ {movie.vote_average}</p>

        <button onClick={toggleFav}>
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>
    </Link>
  );
}