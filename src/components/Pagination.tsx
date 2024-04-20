import { useEffect, useState } from "react";

interface IPagination {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: IPagination) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 5, 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 5, totalPages));
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={prevPage}
        disabled={currentPage <= 1}
        className="px-4 py-2 mr-2 hover:bg-gray-200 rounded-full"
      >
        이전
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            className={`px-4 py-2 mx-2 hover:bg-gray-200 ${
              pageNumber === currentPage ? "bg-black text-white" : "text-black"
            } rounded-full`}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 ml-2 hover:bg-gray-200 rounded-full"
      >
        다음
      </button>
    </div>
  );
};
