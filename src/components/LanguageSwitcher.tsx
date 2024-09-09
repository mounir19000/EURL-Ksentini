"use client";

import { Noto_Color_Emoji } from "next/font/google";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter from next/navigation

import "@/app/langswitch.css"; // Adjust the path to your CSS module

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: ["400"],
});

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(props.locale);

  const pathname = usePathname(); // Use usePathname instead of useRouter for path
  const router = useRouter(); // Use useRouter from next/navigation for navigation

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value as "en" | "fr" | "ar";
    setSelectedLanguage(event.target.value);

    // Extract the current locale and the rest of the path
    const currentLocale = pathname?.split("/")[1]; // Get the current locale (first part of path)
    const restOfPath = pathname?.replace(`/${currentLocale}`, ""); // Remove current locale

    // Build the new path with the new locale
    const newPath = `/${language}${restOfPath}`;

    // Navigate to the new path with the updated locale
    router.push(newPath);
  };

  return (
    <div className="selectWrapper">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className={`customSelect md:mt-1 text-center text-lg md:text-lg ${notoColorEmoji.className}`}
      >
        <option value="fr" className={`${notoColorEmoji.className}`}>
          🇫🇷
        </option>
        <option value="ar" className={`${notoColorEmoji.className}`}>
          🇩🇿
        </option>
        <option value="en" className={`${notoColorEmoji.className}`}>
          🇺🇸
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
