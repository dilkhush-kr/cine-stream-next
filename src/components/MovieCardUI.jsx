import React from "react"; 

export default function MovieCardUI({
  movie,
  isFav,
  onToggleFav,
}) {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">

      <img src={image} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>{movie.release_date?.slice(0, 4)}</p>

      <p>⭐ {movie.vote_average}</p>

      <button onClick={onToggleFav}>
        {isFav ? "❤️" : "🤍"}
      </button>

    </div>
  );
}