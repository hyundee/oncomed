const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nEypJq66ar-tr-KtFz-AC910YhdLakTDSM-oeIDLwQ";
const BASE_PATH = "https://api.themoviedb.org/3/movie";

export interface IGetData {
  results: IResults[];
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

export interface IGetTvDetails {
  genres: IGenres[];
  id: number;
  name: string;
  overview: string;
  number_of_episodes: number;
  number_of_seasons: number;
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  first_air_date: string;
  last_air_date: string;
  seasons: ISeasons[];
  tagline: string;
  vote_average: number;
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

export const getMovieDetails = (movieId: string) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};

// https://api.themoviedb.org/3/tv/67915?api_key=8d8ef69753e75e7d8a49a7261b364408&language=ko-KR&page=1

// https://api.themoviedb.org/3/search/multi?api_key=8d8ef69753e75e7d8a49a7261b364408&query=dune&include_adult=false&language=en-US&page=1
