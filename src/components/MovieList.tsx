import { IResults } from "../api";
import { MovieDetails } from "./MovieDetails";

interface IMovieList {
  movieData: IResults[] | undefined;
  language: string;
}

export const MovieList = ({ movieData, language }: IMovieList) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      {movieData?.map((movie) => (
        <MovieDetails key={movie.id} movieId={movie.id} language={language} />
      ))}
    </div>
  );
};
