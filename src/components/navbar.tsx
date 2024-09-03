"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// component imports
import MobileNavPart from "./MobileNavPart";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("NavBarAndFooter");

  return (
    <div
      className={`fixed h-ksentini-navbar top-0 left-0 right-0 z-30 bg-white border-b-2 border-gray-400`}
    >
      <div className={`containers h-ksentini-navbar`}>
        <div className="h-full w-full flex justify-between items-center">
          <div className="flex justify-center items-start ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={835}
                height={192}
                className="responsive-logo"
              />
            </Link>
          </div>

          <div className="h-full flex items-center">
            <div className="block h-full xl:hidden">
              <div className="flex justify-center items-center h-full">
                <MobileNavPart />
              </div>
            </div>
            <div className="hidden h-full xl:block">
              <div className="h-full flex flex-row items-center gap-12">
                <Link
                  href="/"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>{t("home")}</p>
                </Link>
                <Link
                  href="/activities"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/activities"
                      ? "border-ksentini-orange text-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>{t("activities")}</p>
                </Link>
                <Link
                  href="/references"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/references"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>{t("references")}</p>
                </Link>
                <Link
                  href="/galerie"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/galerie"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>{t("gallery")}</p>
                </Link>
                <Link
                  href="/contact"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/contact"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>{t("contact")}</p>
                </Link>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
