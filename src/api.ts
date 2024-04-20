const API_KEY = "8d8ef69753e75e7d8a49a7261b364408";
const BASE_PATH = "https://api.themoviedb.org/3/movie";

export interface IGetData {
  results: IResults[];
  total_pages: number;
  total_results: number;
}

export interface IResults {
  id: number;
  name: string;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  media_type: string;
  release_date: string;
}

export interface IGenres {
  name: string;
}

export interface IGetMovieDetails {
  backdrop_path: string;
  genres: IGenres[];
  id: number;
  imdb_id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export const getNowPlaying = async (page: number) => {
  return await fetch(
    `${BASE_PATH}/now_playing?api_key=${API_KEY}&page=${page}`
  ).then((response) => response.json());
};

export const getMovieDetails = async (movieId: number, language: string) => {
  return await fetch(
    `${BASE_PATH}/${movieId}?api_key=${API_KEY}&language=${language}`
  ).then((response) => response.json());
};
