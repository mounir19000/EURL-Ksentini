import React from "react";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <div className="bg-gray-500">
      <div className="containers py-10 md:py-16 lg:py-20 flex flex-wrap">
        <div className="w-[100%] pb-3 md:pb-0 md:w-[50%] lg:w-[30%] p-1 flex items-start lg:items-center justify-center md:justify-start">
          <div className="text-white font-bold text-8xl">Logo</div>
        </div>

        <div className="w-[100%] md:w-[50%] lg:w-[20%] p-1">
          <h1 className="font-bold text-xl pb-2">Lien rapide</h1>
          <ul className="list-none">
            <li className="pb-2">
              <Link href="/activities">
                <p>Nos Activités</p>
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/gallery">
                <p>Galerie</p>
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/references">
                <p>Nos references</p>
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[100%] md:w-[50%] lg:w-[25%] p-1">
          <h1 className="font-bold text-xl pb-2">Contact</h1>
          <ul className="list-none">
            <li className="pb-2">
              <a
                href="tel:"
                className="flex flex-nowrap gap-2 justify-start items-center"
              >
                <span>
                  <Image
                    src="/PhoneIcon.png"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span>+213 55 66 88 77</span>
              </a>
            </li>
            <li className="pb-2">
              <a
                href="tel:"
                className="flex flex-nowrap gap-2 justify-start items-center"
              >
                <span>
                  <Image
                    src="/PhoneIcon.png"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span>+213 55 66 88 77</span>
              </a>
            </li>
            <li className="pb-2">
              <a
                href="mailto:"
                className="flex flex-nowrap gap-2 justify-start items-center"
              >
                <span>
                  <Image
                    src="/MailIcon.png"
                    alt="Mail Icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span>blabla@gmail.com</span>
              </a>
            </li>
            <li className="pb-2">
              <a
                href="mailto:"
                className="flex flex-nowrap gap-2 justify-start items-center"
              >
                <span>
                  <Image
                    src="/MailIcon.png"
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span>blabla@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[100%] md:w-[50%] lg:w-[25%] p-1">
          <h1 className="font-bold text-xl pb-2">Address</h1>
          <p>123 rue de la rue, Ville, Pays Code postal</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
