import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logoWhite.png";

const footer = () => {
  return (
    <>
      <div className="bg-ksentini-orange">
        <div className="containers py-10 md:py-16 lg:py-20 flex flex-wrap">
          <div className="w-[100%] pb-3 md:pb-0 md:pr-6 md:w-[50%] lg:w-[30%] flex items-start lg:items-center justify-center md:justify-start">
            <div className="flex justify-center items-start">
              <Image
                src={Logo}
                alt="Logo"
                style={{ height: "auto", width: "full" }}
              />
            </div>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[20%] p-1 text-white">
            <h1 className="font-bold text-xl pb-2 text-black">Lien rapide</h1>
            <ul className="list-none pl-1">
              <li className="pb-2">
                <Link href="/activities">
                  <p>Nos Activités</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/references">
                  <p>Nos references</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/galerie">
                  <p>Galerie</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[25%] p-1 text-white">
            <h1 className="font-bold text-xl pb-2 text-black">Contact</h1>
            <ul className="list-none pl-1">
              <li className="pb-2">
                <a
                  href="tel:+21334133172"
                  className="flex flex-nowrap gap-2 justify-start items-center"
                >
                  <span>
                    <Image
                      src="/footerIcons/FaxIcon.png"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>+(213) 34 13 31 72 </span>
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="tel:+213557203073"
                  className="flex flex-nowrap gap-2 justify-start items-center"
                >
                  <span>
                    <Image
                      src="/footerIcons/PhoneIcon.png"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>+(213) 5 57 20 30 73</span>
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="mailto:eurlksentini_ete@yahoo.fr "
                  className="flex flex-nowrap gap-2 justify-start items-center"
                >
                  <span>
                    <Image
                      src="/footerIcons/MailIcon.png"
                      alt="Mail Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>eurlksentini_ete@yahoo.fr </span>
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="mailto:eurlksentini2018@gmail.com"
                  className="flex flex-nowrap gap-2 justify-start items-center"
                >
                  <span>
                    <Image
                      src="/footerIcons/MailIcon.png"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>eurlksentini2018@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[25%] p-1 text-white">
            <h1 className="font-bold text-xl pb-2 text-black">Address</h1>
            <p className="pl-1">Lotissement N° : 130/131 EL-KSEUR (W) BEJAIA</p>
          </div>
        </div>
      </div>
      <p className="bg-white text-gray-400 text-center font-light py-1">
        © 2024 Eurl Ksentini. All Rights Reserved.{" "}
        <span>
          <Link
            href={
              "https://www.linkedin.com/in/mostefai-mounir-sofiane-4130742a7"
            }
            target="_blank"
          >
            Developed by Mounir Mostefai
          </Link>
        </span>
      </p>
    </>
  );
};

export default footer;
