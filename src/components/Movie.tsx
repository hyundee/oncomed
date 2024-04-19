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
  const [language, setLanguage] = useState("ko-KR");
  const [page, setPage] = useState(1);
  const { data: movie, isLoading } = useQuery<IGetData>({
    queryKey: ["movie", language],
    queryFn: () => getNowPlaying(language, page),
  });

  console.log(language);
  return (
    <div className="p-10">
      {isLoading ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <>
          <LanguageSelector setLanguage={setLanguage} />
          <MovieList data={movie?.results} />
          <Pagination page={page} />
        </>
      )}
    </div>
  );
};
