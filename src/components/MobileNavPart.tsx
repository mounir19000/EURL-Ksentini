"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const MobileNavPart = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed top-0 left-0 right-0 h-auto z-20 bg-white">
          <div className="h-ksantini-navbar bg-white drop-shadow relative flex justify-between items-center px-8">
            {/* <div className="h-full flex items-center">
              <Image
                src="/GimpLogo.svg"
                alt="Logo"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </div> */}
            <div className="text-black font-bold text-xl">Logo</div>
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
            >
              <p className="font-medium text-2xl py-8 text-ksantini-black">
                Acceuil
              </p>
            </Link>
            <Link
              href="/activities"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="font-medium text-2xl py-8 text-ksantini-black">
                Nos Activités
              </p>
            </Link>
            <Link
              href="/galerie"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="font-medium text-2xl py-8 text-ksantini-black">
                Galerie
              </p>
            </Link>
            <Link
              href="/references"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="font-medium text-2xl py-8 text-ksantini-black">
                Nos references
              </p>
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="font-medium text-2xl py-8 text-ksantini-black">
                Contact
              </p>
            </Link>
          </div>

          <p className="bg-white text-ksantini-gray text-center font-bold pt-6 pb-3">
            © 2024 Eurl Ksantini. All Rights Reserved.
          </p>
        </div>
      )}
    </>
  );
};

export default MobileNavPart;
