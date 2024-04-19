import { useState } from "react";

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
    name: "영어",
  },
];

export const LanguageSelector = ({ setLanguage }: ILanguageSelector) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState("한국어");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelectOption = (item: any) => {
    setLanguage(item.id);
    setSelectLanguage(item.name);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <label onClick={handleToggle}>{selectLanguage}</label>
      {isOpen && (
        <ul>
          {OptionList.map((item) => {
            return (
              <li key={item.id} onClick={() => onSelectOption(item)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
