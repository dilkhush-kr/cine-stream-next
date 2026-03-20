// import axios from "axios";

// export async function getPopularMovies(){

//   try{

//     const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

//     const res = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
//     );

//     return res.data.results || [];

//   }catch(error){

//     console.log("TMDB error:",error);

//     return [];

//   }

// }



import axios from "axios";

export async function getPopularMovies() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
      {
        timeout: 10000, // ⏱️ 10 sec wait
      }
    );

    return res.data.results || [];

  } catch (error) {
    console.log("TMDB error:", error.message);

    return []; // 👈 crash hone se bachayega
  }
}
