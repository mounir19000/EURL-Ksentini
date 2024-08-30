"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component imports
import MobileNavPart from "./MobileNavPart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full px-8 xl:px-24 h-ksantini-navbar top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="h-full w-full py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>

        <div>
          <div className="block xl:hidden">
            <MobileNavPart />
          </div>
          <div className="hidden xl:block">
            <div className="flex flex-row items-center gap-16">
              <Link href="/">
                <p
                  className={`font-normal text-lg py-4  hover:text-ksantini-blue hover:underline link ${
                    pathname === "/"
                      ? "text-ksantini-blue"
                      : "text-ksantini-gray-dark"
                  }`}
                >
                  Acceuil
                </p>
              </Link>
              <Link href="/activities">
                <p
                  className={`font-normal text-lg py-4  hover:text-ksantini-blue hover:underline link ${
                    pathname === "/activities"
                      ? "text-ksantini-blue"
                      : "text-ksantini-gray-dark"
                  }`}
                >
                  Nos Activités
                </p>
              </Link>
              <Link href="/galerie">
                <p
                  className={`font-normal text-lg py-4  hover:text-ksantini-blue hover:underline link ${
                    pathname === "/galerie"
                      ? "text-ksantini-blue"
                      : "text-ksantini-gray-dark"
                  }`}
                >
                  Galerie
                </p>
              </Link>
              <Link href="/references">
                <p
                  className={`font-normal text-lg py-4  hover:text-ksantini-blue hover:underline link ${
                    pathname === "/references"
                      ? "text-ksantini-blue"
                      : "text-ksantini-gray-dark"
                  }`}
                >
                  Nos references
                </p>
              </Link>
              <Link href="/contact">
                <p
                  className={`font-normal text-lg py-4  hover:text-ksantini-blue hover:underline link ${
                    pathname === "/contact"
                      ? "text-ksantini-blue"
                      : "text-ksantini-gray-dark"
                  }`}
                >
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
