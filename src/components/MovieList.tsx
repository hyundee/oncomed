import { IResults } from "../api";
import { MovieDetails } from "./MovieDetails";

interface IMovieList {
  data: IResults[] | undefined;
  language: string;
}

export const MovieList = ({ data, language }: IMovieList) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      {data?.map((movie) => (
        <MovieDetails key={movie.id} movieId={movie.id} language={language} />
      ))}
    </div>
  );
};
