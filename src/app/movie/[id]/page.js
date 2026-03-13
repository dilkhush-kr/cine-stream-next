import axios from "axios";

export async function generateMetadata({ params }) {

  const { id } = await params;

  try {

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    );

    const movie = res.data;

    return {
      title: movie.title,
      description: movie.overview,
    };

  } catch (error) {

    return {
      title: "Movie",
      description: "Movie details page",
    };

  }
}

export default async function MovieDetails({ params }) {

  const { id } = await params;

  try {

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    );

    const movie = res.data;

    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (

      <div style={{ padding: "40px" }}>

        <h1>{movie.title}</h1>

        <img src={image} width="300" />

        <p>{movie.overview}</p>

        <p>⭐ {movie.vote_average}</p>

        <p>Release: {movie.release_date}</p>

      </div>

    );

  } catch (error) {

    return (
      <div style={{ padding: "40px" }}>
        <h2>Movie not found</h2>
      </div>
    );

  }
}