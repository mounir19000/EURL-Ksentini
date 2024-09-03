"use client";
import { Inter, Noto_Color_Emoji } from "next/font/google";
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: ["400"],
});

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const router = useRouter();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value as "en" | "fr" | undefined;
    setSelectedLanguage(event.target.value);

    // Use the selected variable in router.replace
    router.replace(pathname, { locale: language });
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className={`bg-white border border-gray-300 rounded p-1 ${notoColorEmoji.className}`}
      >
        <option
          value="en"
          className="flex items-center justify-center p-2 cursor-pointer"
        >
          🇺🇸
        </option>
        <option
          value="fr"
          className="flex items-center justify-center p-2 cursor-pointer"
        >
          🇫🇷
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
