"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

const MobileNavPart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("NavBarAndFooter");

  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <button className="h-12" onClick={() => setIsOpen(true)}>
        <Image
          src="/NavSideButton.svg"
          alt="Hamburger button"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 overflow-scroll z-50"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="h-auto overflow-scroll">
            <div className="containers h-ksentini-navbar bg-white drop-shadow relative flex justify-between items-center">
              <div className="flex justify-center items-start ">
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {locale === "ar" ? (
                    <Image
                      src="/logoAr.png"
                      alt="Logo"
                      width={950}
                      height={262}
                      className="responsive-logo"
                    />
                  ) : (
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={835}
                      height={192}
                      className="responsive-logo"
                    />
                  )}
                </Link>
              </div>
              <button
                className="h-full flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/NavSideButtonClose.svg"
                  alt="Logo"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </button>
            </div>

            <div className="bg-white flex flex-col items-center justify-center">
              <Link
                href="/"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center"
              >
                <p
                  className={`font-normal sm:font-medium text-lg sm:text-2xl py-4 sm:py-8 ${
                    pathname === "/" ? "text-ksentini-orange" : "text-black"
                  }`}
                >
                  {t("home")}
                </p>
              </Link>
              <Link
                href="/activities"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center"
              >
                <p
                  className={`font-normal sm:font-medium text-lg sm:text-2xl py-4 sm:py-8 ${
                    pathname === "/activities"
                      ? "text-ksentini-orange"
                      : "text-black"
                  }`}
                >
                  {t("activities")}
                </p>
              </Link>
              <Link
                href="/references"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center"
              >
                <p
                  className={`font-normal sm:font-medium text-lg sm:text-2xl py-4 sm:py-8 ${
                    pathname === "/references"
                      ? "text-ksentini-orange"
                      : "text-black"
                  }`}
                >
                  {t("references")}
                </p>
              </Link>
              <Link
                href="/galerie"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center"
              >
                <p
                  className={`font-normal sm:font-medium text-lg sm:text-2xl py-4 sm:py-8 ${
                    pathname === "/galerie"
                      ? "text-ksentini-orange"
                      : "text-black"
                  }`}
                >
                  {t("gallery")}
                </p>
              </Link>
              <Link
                href="/contact"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center"
              >
                <p
                  className={`font-normal sm:font-medium text-lg sm:text-2xl py-4 sm:py-8 ${
                    pathname === "/contact"
                      ? "text-ksentini-orange"
                      : "text-black"
                  }`}
                >
                  {t("contact")}
                </p>
              </Link>

              <div className="w-full containers flex justify-evenly py-3 sm:py-4">
                <Link
                  href={pathname}
                  locale="ar"
                  className={`text-center flex items-center justify-center gap-x-2 px-3 py-2 rounded-md ${
                    locale === "ar"
                      ? "bg-ksentini-orange text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <Image
                    src="/flags/ar.png"
                    alt=""
                    height={318}
                    width={512}
                    className="h-4 w-auto border-black border-[0.5px] mt-[0.5px]"
                  />
                  <p className="font-normal sm:font-medium text-lg sm:text-2xl">
                    AR
                  </p>
                </Link>
                <Link
                  href={pathname}
                  locale="fr"
                  className={`text-center flex items-center justify-center gap-x-2 px-3 py-2 rounded-md ${
                    locale === "fr"
                      ? "bg-ksentini-orange text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <Image
                    src="/flags/fr.png"
                    alt=""
                    height={183}
                    width={275}
                    className="h-4 w-auto border-black border-[0.5px] mt-[0.5px]"
                  />
                  <p className="font-normal sm:font-medium text-lg sm:text-2xl">
                    FR
                  </p>
                </Link>
                <Link
                  href={pathname}
                  locale="en"
                  className={`text-center flex items-center justify-center gap-x-2 px-3 py-2 rounded-md ${
                    locale === "en"
                      ? "bg-ksentini-orange text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <Image
                    src="/flags/en.png"
                    alt=""
                    height={710}
                    width={1460}
                    className="h-4 w-auto border-black border-[0.5px] mt-[0.5px]"
                  />
                  <p className="font-normal sm:font-medium text-lg sm:text-2xl">
                    EN
                  </p>
                </Link>
              </div>
            </div>

            <p
              dir="ltr"
              className="bg-white text-gray-400 drop-shadow border-gray-400 border-b-2 text-center font-semibold sm:font-bold pt-3 sm:pt-6 pb-3"
            >
              © 2024 Eurl Ksentini. All Rights Reserved.
            </p>
          </div>
          <div
            className="w-full h-full"
            onClick={() => {
              setIsOpen(false);
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default MobileNavPart;
