import MovieCardUI from "./MovieCardUI";

export default {
  title: "Components/MovieCard",
  component: MovieCardUI,

     argTypes: {
    theme: {
      control: {
        type: "select",
      },
      options: ["light", "dark"],
    },
  },
};

const sampleMovie = {
  id: 1,
  title: "Avengers: Endgame",
  poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  release_date: "2019-04-26",
  vote_average: 8.4,
};

export const Default = {
  args:{
    movie:sampleMovie,
    isFav:false,
    onToggleFav:() => alert("Clicked ❤️"),
    // theme:"light",
  },
};

export const Favorite = {
  args: {
    movie: sampleMovie,
    isFav: true,
    onToggleFav: () => alert("Removed 💔"),
    // theme: "dark",
  },
};
