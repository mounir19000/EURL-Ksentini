"use client";
import Image from "next/image";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const MobileNavPart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("NavBarAndFooter");

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
        <div className="fixed inset-0 overflow-scroll z-50">
          <div className="h-auto overflow-scroll">
            <div className="containers h-ksentini-navbar bg-white drop-shadow relative flex justify-between items-center">
              <div className="flex justify-center items-start ">
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={835}
                    height={192}
                    className="responsive-logo"
                  />
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
            </div>

            <p className="bg-white text-gray-400 drop-shadow border-gray-400 text-center font-semibold sm:font-bold pt-3 sm:pt-6 pb-3">
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
