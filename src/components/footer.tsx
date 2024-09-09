import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  locale: string;
  address: string;
  title1: string;
  title2: string;
  title3: string;
  activities: string;
  references: string;
  gallery: string;
  contact: string;
}

const Footer = (props: FooterProps) => {
  return (
    <>
      <div className="bg-ksentini-orange">
        <div className="containers py-10 md:py-16 lg:py-20 flex flex-wrap">
          <div
            className={`w-[100%] pb-3 ${
              props.locale === "ar" ? "md:pl-6" : "md:pr-6"
            } md:pb-0  md:w-[50%] lg:w-[30%] flex items-start lg:items-center justify-center md:justify-start`}
          >
            <div className="flex justify-center items-start">
              {props.locale === "ar" ? (
                <Image
                  src="/logoAr.png"
                  alt="Logo"
                  width={950}
                  height={262}
                  style={{ height: "auto", width: "full" }}
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={835}
                  height={192}
                  style={{ height: "auto", width: "full" }}
                />
              )}
            </div>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[20%] p-1 text-white">
            <h1 className="font-bold text-xl pb-2 text-black">
              {props.title1}
            </h1>
            <ul className="list-none pl-1">
              <li className="pb-2">
                <Link href={`/${props.locale}/activities`}>
                  <p>{props.activities}</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href={`/${props.locale}/references`}>
                  <p>{props.references}</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href={`/${props.locale}/galerie`}>
                  <p>{props.gallery}</p>
                </Link>
              </li>
              <li className="pb-2">
                <Link href={`/${props.locale}/contact`}>
                  <p>{props.contact}</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[100%] md:w-[50%] lg:w-[25%] p-1 text-white">
            <h1 className="font-bold text-xl pb-2 text-black">
              {props.title2}
            </h1>
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
                  <span dir="ltr">+(213) 34 13 31 72 </span>
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
                  <span dir="ltr">+(213) 5 57 20 30 73</span>
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
            <Link
              href="https://maps.app.goo.gl/VHZa5ftbjJmjR9hz8"
              target="_blank"
            >
              <h1 className="font-bold text-xl pb-2 text-black">
                {props.title3}
              </h1>
              <p className="pl-1">{props.address}</p>
            </Link>
          </div>
        </div>
      </div>
      <p
        className="bg-white text-gray-400 text-center font-light py-1"
        dir="ltr"
      >
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

export default Footer;
