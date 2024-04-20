import { useQuery } from "@tanstack/react-query";
import { IGetData, IResults, getNowPlaying } from "../api";
import { MovieList } from "./MovieList";
import { useEffect, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { Pagination } from "./Pagination";
import { SortController } from "./SortController";
import { Loading } from "./Loading";

export const Movie = () => {
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("en-US");
  const [sortedData, setSortedData] = useState<IResults[]>();

  const { data: movieData, isLoading } = useQuery<IGetData>({
    queryKey: ["movieData", page],
    queryFn: () => getNowPlaying(page),
  });

  useEffect(() => {
    setSortedData(movieData && [...movieData.results]);
  }, [movieData]);

  return (
    <div className="p-20">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {sortedData && (
            <>
              <div className="pb-5 flex gap-5">
                <LanguageSelector setLanguage={setLanguage} />
                <SortController
                  sortedData={sortedData}
                  setSortedData={setSortedData}
                />
              </div>
              <div>
                <MovieList movieData={sortedData} language={language} />
                <Pagination
                  currentPage={page}
                  setCurrentPage={setPage}
                  totalPages={174}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
