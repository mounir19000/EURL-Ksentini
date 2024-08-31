"use client";

import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component imports
import MobileNavPart from "./MobileNavPart";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed h-ksantini-navbar top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-400`}
    >
      <div className={`containers h-ksantini-navbar`}>
        <div className="h-full w-full flex justify-between items-center">
          <div className="flex justify-center items-start ">
            <Image
              src={Logo}
              alt="Logo"
              style={{ height: "40px", width: "auto" }}
            />
          </div>

          <div className="h-full flex items-center">
            <div className="block h-full xl:hidden">
              <div className="flex justify-center items-center h-full">
                <MobileNavPart />
              </div>
            </div>
            <div className="hidden h-full xl:block">
              <div className="h-full flex flex-row items-center gap-16">
                <Link
                  href="/"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>Acceuil</p>
                </Link>
                <Link
                  href="/activities"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/activities"
                      ? "border-ksentini-orange text-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>Nos Activités</p>
                </Link>
                <Link
                  href="/references"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/references"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>Nos références</p>
                </Link>
                <Link
                  href="/galerie"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/galerie"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>Galerie</p>
                </Link>
                <Link
                  href="/contact"
                  className={`h-full flex items-center font-bold text-lg border-t-4 border-ksentini-orange hover:border-ksentini-orange hover:text-ksentini-orange ${
                    pathname === "/contact"
                      ? "text-ksentini-orange border-ksentini-orange"
                      : "text-black border-transparent"
                  }`}
                >
                  <p>Contact</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
