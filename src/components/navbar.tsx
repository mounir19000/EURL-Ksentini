"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component imports
import MobileNavPart from "./MobileNavPart";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  locale: string;
  home: string;
  activities: string;
  references: string;
  gallery: string;
  contact: string;
}

const Navbar = (props: NavbarProps) => {
  const pathname = usePathname(); // Use usePathname instead of useRouter

  return (
    <div
      className={`absolute md:fixed h-ksentini-navbar top-0 left-0 right-0 z-30 bg-white border-b-2 border-gray-400`}
    >
      <div className={`containers h-ksentini-navbar`}>
        <div className="h-full w-full flex justify-between items-center">
          <div className="flex justify-center items-start ">
            <Link href={`/${props.locale}`}>
              {props.locale === "ar" ? (
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

          <div className="h-full flex items-center">
            <div className="block h-full xl:hidden">
              <div className="flex justify-center gap-x-3 items-center h-full">
                <MobileNavPart
                  locale={props.locale}
                  home={props.home}
                  activities={props.activities}
                  references={props.references}
                  gallery={props.gallery}
                  contact={props.contact}
                />
              </div>
            </div>
            <div className="hidden h-full xl:block">
              <div className="h-full flex flex-row items-center gap-8">
                <div className="h-full flex flex-row items-center gap-12">
                  <Link
                    href={`/${props.locale}`}
                    className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                      pathname === `/${props.locale}` || pathname === "/"
                        ? "text-ksentini-orange border-ksentini-orange"
                        : "text-black border-transparent"
                    }`}
                  >
                    <p>{props.home}</p>
                  </Link>
                  <Link
                    href={`/${props.locale}/activities`}
                    className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                      pathname === `/${props.locale}/activities`
                        ? "border-ksentini-orange text-ksentini-orange"
                        : "text-black border-transparent"
                    }`}
                  >
                    <p>{props.activities}</p>
                  </Link>
                  <Link
                    href={`/${props.locale}/references`}
                    className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                      pathname === `/${props.locale}/references`
                        ? "text-ksentini-orange border-ksentini-orange"
                        : "text-black border-transparent"
                    }`}
                  >
                    <p>{props.references}</p>
                  </Link>
                  <Link
                    href={`/${props.locale}/galerie`}
                    className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                      pathname === `/${props.locale}/galerie`
                        ? "text-ksentini-orange border-ksentini-orange"
                        : "text-black border-transparent"
                    }`}
                  >
                    <p>{props.gallery}</p>
                  </Link>
                  <Link
                    href={`/${props.locale}/contact`}
                    className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                      pathname === `/${props.locale}/contact`
                        ? "text-ksentini-orange border-ksentini-orange"
                        : "text-black border-transparent"
                    }`}
                  >
                    <p>{props.contact}</p>
                  </Link>
                </div>
                <LanguageSwitcher locale={props.locale} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
