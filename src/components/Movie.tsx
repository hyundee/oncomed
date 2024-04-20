import { useQuery } from "@tanstack/react-query";
import { IGetData, getNowPlaying } from "../api";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { Pagination } from "./Pagination";

// interface IMovie {
//   language: string;
// }

export const Movie = () => {
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const { data: movie, isLoading } = useQuery<IGetData>({
    queryKey: ["movie", language, page],
    queryFn: () => getNowPlaying(language, page),
  });
  return (
    <div className="p-20">
      {isLoading ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <>
          {movie && (
            <div>
              <LanguageSelector setLanguage={setLanguage} />
              <MovieList data={movie.results} language={language} />
              <Pagination
                currentPage={page}
                setCurrentPage={setPage}
                totalPages={174}
                pageCount={10}
                totalMovies={movie.results.length}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
