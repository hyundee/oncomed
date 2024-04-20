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

export interface ISeasons {
  air_date: string;
  episode_count: number;
  overview: string;
  season_number: number;
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

// MOVIE API
// export const getNowPlaying = (language: string) => {
//   return fetch(
//     `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=${language}&page=174`
//   ).then((response) => response.json());
// };

export const getNowPlaying = async (language: string, page: number) => {
  const API_KEY = "8d8ef69753e75e7d8a49a7261b364408";

  const url = `${BASE_PATH}/now_playing?api_key=${API_KEY}&language=${language}&page=1${page}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("API 호출 중 오류가 발생했습니다.");
  }

  const data = await response.json();
  return data;
};

export const getMovieDetails = (movieId: number, language: string) => {
  return fetch(
    `${BASE_PATH}/${movieId}?api_key=${API_KEY}&language=${language}`
  ).then((response) => response.json());
};

// https://api.themoviedb.org/3/tv/67915?api_key=8d8ef69753e75e7d8a49a7261b364408&language=ko-KR&page=1

// https://api.themoviedb.org/3/search/multi?api_key=8d8ef69753e75e7d8a49a7261b364408&query=dune&include_adult=false&language=en-US&page=1
