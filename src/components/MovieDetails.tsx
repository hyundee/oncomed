import { useQuery } from "@tanstack/react-query";
import { IGetMovieDetails, IResults, getMovieDetails } from "../api";
import { RatingStars } from "./RatingStars";

interface IMovieDetails {
  movieId: number;
  language: string;
}

export const MovieDetails = ({ movieId, language }: IMovieDetails) => {
  const { data: movieDetails, isLoading } = useQuery<IGetMovieDetails>({
    queryKey: ["movieDetails", movieId, language],
    queryFn: () => getMovieDetails(movieId, language),
  });

  return (
    <div>
      {movieDetails && (
        <div className="grid grid-cols-2">
          <img
            className=""
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt={movieDetails?.title}
          />
          <div className="grid grid-cols-1 gap-y-3 content-start text-xl">
            <div className="text-3xl font-bold text-balance">
              {movieDetails.title}
            </div>
            <RatingStars rating={movieDetails.vote_average} />
            {/* <div>{movieDetails.vote_average.toFixed(1)}</div> */}
            <div>{movieDetails.release_date}</div>
            <div className="flex gap-5 truncate">
              {movieDetails.genres.map((g, idx) => (
                <span key={idx}>{g.name}</span>
              ))}
            </div>
            <div className="line-clamp-6">{movieDetails.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
};
