import { useState } from "react";
import { IResults } from "../api";

interface ISortController {
  sortedData: IResults[] | undefined;
  setSortedData: React.Dispatch<React.SetStateAction<IResults[] | undefined>>;
}

const SortList = ["오름차순", "내림차순"];

export const SortController = ({
  sortedData,
  setSortedData,
}: ISortController) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectSort, setSelectSort] = useState("정렬선택");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelectOption = (item: string) => {
    setSelectSort(item);
    setIsOpen((prev) => !prev);
    if (sortedData) {
      const newData = [...sortedData];
      if (item === "오름차순") {
        newData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (item === "내림차순") {
        newData.sort((a, b) => b.title.localeCompare(a.title));
      }
      setSortedData(newData);
    }
  };

  return (
    <div className="flex flex-col gap-2 content-end cursor-pointer">
      <label
        className="w-20 border rounded-lg border-black w-20px p-2 text-center cursor-pointer"
        onClick={handleToggle}
      >
        {selectSort}
      </label>
      {isOpen && (
        <ul className="w-20 border rounded-lg border-black w-20px p-2 text-center">
          {SortList.map((item) => {
            return (
              <li
                className="hover:text-gray-500"
                key={item}
                onClick={() => onSelectOption(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
