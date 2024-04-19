import { useState } from "react";

interface IPagination {
  page: number;
  // totalItems: number; // 데이터의 총 개수
  // itemCountPerPage: number; // 페이지 당 보여줄 데이터 개수
  // pageCount: number; // 보여줄 페이지 개수
  // currentPage: number; // 현재 페이지
}

export const Pagination = ({
  page,
}: // totalItems,
// itemCountPerPage,
// pageCount,
IPagination) => {
  const totalPages = Math.ceil(totalItems / itemCountPerPage); // 총 페이지 개수
  const [start, setStart] = useState(1); // 시작 페이지
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  // function handleClickNext() {
  //   if (!canForward) return;
  //   setCurrentPage(pre => pre + 1);
  // }

  // function handleClickBack() {
  //   if (!canBack) return;
  //   setCurrentPage(pre => pre - 1);
  // }

  return (
    <div>
      <button>이전</button>
      <div>{page}</div>
      <button>다음</button>
    </div>
  );
};
