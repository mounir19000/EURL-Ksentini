"use client";
import { Noto_Color_Emoji } from "next/font/google";
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import "@/app/langswitch.css"; // Adjust the path to your CSS module

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
    const language = event.target.value as "en" | "fr" | "ar" | undefined;
    setSelectedLanguage(event.target.value);

    // Use the selected variable in router.replace
    router.replace(pathname, { locale: language });
  };

  return (
    <div className="selectWrapper">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className={`customSelect md:mt-1 text-center text-xl md:text-lg ${notoColorEmoji.className}`}
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
