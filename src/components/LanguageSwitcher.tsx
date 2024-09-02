import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: string): void => {
    console.log(`Language selected: ${language}`);
    // Add your language change logic here
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as HTMLElement).contains(event.target as Node)
    ) {
      setIsOpen(false); // Close the dropdown if clicking outside
    }
  };

  // Add and remove event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white rounded-full h-full flex justify-center items-center shadow hover:bg-orange-200"
      >
        <Image
          src="/languageSwitch/language.png"
          alt="Globe"
          width={25}
          height={25}
          className=""
        />
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
        >
          <div
            onClick={() => handleLanguageChange("English")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            English
          </div>
          <div
            onClick={() => handleLanguageChange("Arabic")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            Arabic
          </div>
          <div
            onClick={() => handleLanguageChange("French")}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            French
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
