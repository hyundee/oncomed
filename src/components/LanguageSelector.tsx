import { useEffect, useState } from "react";

interface ILanguageSelector {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const OptionList = [
  {
    id: "ko-KR",
    name: "한국어",
  },
  {
    id: "en-US",
    name: "English",
  },
];

export const LanguageSelector = ({ setLanguage }: ILanguageSelector) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(OptionList[1].name);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelectOption = (item: any) => {
    setIsOpen((prev) => !prev);
    setSelectLanguage(item.name);
    setLanguage(item.id);
  };

  return (
    <div className="flex flex-col gap-2 content-end cursor-pointer">
      <label
        className="w-20 border rounded-lg border-black w-20px p-2 text-center cursor-pointer"
        onClick={handleToggle}
      >
        {selectLanguage}
      </label>
      {isOpen && (
        <ul className="w-20 border rounded-lg border-black w-20px p-2 text-center">
          {OptionList.map((item) => {
            return (
              <li
                className="hover:text-gray-500"
                key={item.id}
                onClick={() => onSelectOption(item)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
