import { useQuery } from "@tanstack/react-query";
import { IGetMovieDetails, getMovieDetails } from "../api";
import { RatingStars } from "./RatingStars";
import { Loading } from "./Loading";

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
      {isLoading ? (
        <Loading />
      ) : (
        movieDetails && (
          <div className="flex gap-x-5">
            <div className="basis-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails?.title}
              />
            </div>
            <div className="basis-2/3 grid grid-cols-1 gap-y-3 content-start text-xl">
              <div className="text-3xl font-bold text-balance">
                {movieDetails.title}
              </div>
              <RatingStars
                rating={movieDetails.vote_average}
                movieId={movieId}
              />
              <div>{movieDetails.release_date}</div>
              <div className="flex gap-5 truncate">
                {movieDetails.genres.map((g, idx) => (
                  <span key={idx}>{g.name}</span>
                ))}
              </div>
              <div className="line-clamp-6">{movieDetails.overview}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
