import axios from "axios";
const api = axios.create({
  baseURL: "https://yts.mx/api/v2/",
});

export const getMovies = async (limit: number, rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await api.get("/list_movies.json", {
    params: { limit, minimum_rating: rating },
  });
  return movies;
};

export const getMoive = async (id: string) => {
  const {
    data: {
      data: { movie },
    },
  } = await api.get("/movie_details.json", {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id: string) => {
  const {
    data: {
      data: { movies },
    },
  } = await api.get("/movie_suggestions.json", { params: { movie_id: id } });
  return movies;
};
