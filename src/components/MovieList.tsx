import { IGetData, IResults } from "../api";

interface IMovieList {
  data: IResults[] | undefined;
}

export const MovieList = ({ data }: IMovieList) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10">
        {data?.map((movie) => (
          <div key={movie.id} className="">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie?.title}
            />
            {/* <div className="flex justify-between">
              <span className="text-2xl font-bold">{movie?.title}</span>
              <span>{movie?.vote_average.toFixed(1)}</span>
            </div> */}
            <div className="text-xl font-bold">{movie?.title}</div>
            <div className="text-lg">{movie?.vote_average.toFixed(1)}</div>
            <div className="text-lg">{movie?.overview}</div>
          </div>
        ))}
      </div>
    </>
  );
};
