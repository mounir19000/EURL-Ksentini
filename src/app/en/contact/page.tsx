import Image from "next/image";
import type { Metadata } from "next";

// images
import Loction from "/public/footerIcons/LocationIcon.png";
import Phone from "/public/footerIcons/PhoneIcon.png";
import Mail from "/public/footerIcons/MailIcon.png";

// Component imports
import ContactForm from "@/components/contactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "Need more information about our civil engineering and electrical installation services? Contact EURL Ksentini today.",
  keywords:
    "contact, information, civil engineering, electrical installation, Algeria",
};

import data from "@/Json/en.json";
const locale = "en";

const Contact = () => {
  return (
    <div className="w-full bg-slate-200">
      {/* First part of the contact page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              {data["Contact"].contact}
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the contact page */}
      <div className="containers py-14 flex flex-col md:flex-row justify-between w-full gap-3">
        {/* Location section */}
        <div className="flex flex-col justify-start items-center flex-1 mb-4 md:mb-0">
          <Link
            href="https://maps.app.goo.gl/VHZa5ftbjJmjR9hz8"
            target="_blank"
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-3 md:mb-4"
          >
            <Image src={Loction} alt="Location Icon" width={35} height={35} />
          </Link>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">
              {data["Contact"].title1}
            </h1>
            <a
              href="https://maps.app.goo.gl/VHZa5ftbjJmjR9hz8"
              className="flex justify-center"
            >
              <p className="text-center md:text-base w-2/3">
                {data["Address"].address}
              </p>
            </a>
          </div>
        </div>
        {/* Phone section */}
        <div className="flex flex-col justify-start items-center flex-1 mb-4 md:mb-0">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-3 md:mb-4"
          >
            <Image src={Phone} alt="Phone Icon" width={35} height={35} />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">
              {data["Contact"].title2}
            </h1>
            <a href="tel:+21334133172">
              <p className="text-center md:text-base" dir="ltr">
                +213 34 13 31 72
              </p>
            </a>
            <a href="tel:+213557203073">
              <p className="text-center md:text-base" dir="ltr">
                +213 5 57 20 30 73
              </p>
            </a>
            <a href="tel:+213560201750">
              <p className="text-center md:text-base" dir="ltr">
                +213 5 60 20 17 50
              </p>
            </a>
          </div>
        </div>
        {/* Email section */}
        <div className="flex flex-col justify-start items-center flex-1 mb-4 md:mb-0">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-3 md:mb-4"
          >
            <Image src={Mail} alt="Mail Icon" width={35} height={35} />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">
              {data["Contact"].title3}
            </h1>
            <a
              href="mailto:contact@eurl-ksentini.com"
              className="flex justify-center"
            >
              <p className="text-center md:text-base">
                contact@eurl-ksentini.com
              </p>
            </a>
            <a
              href="mailto:eurlksentini2018@gmail.com"
              className="flex justify-center"
            >
              <p className="text-center md:text-base">
                eurlksentini2018@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Third part of the contact page */}
      <div className={`contactCustomBg py-14 `}>
        <div className="containers flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1">
            <ContactForm
              title={data["Contact"].title4}
              placeholder1={data["Contact"].placeholder1}
              placeholder2={data["Contact"].placeholder2}
              placeholder3={data["Contact"].placeholder3}
              placeholder4={data["Contact"].placeholder4}
              button={data["Contact"].button}
              button2={data["Contact"].button2}
              locale={locale}
            />
          </div>

          <iframe
            className="flex-1 border-4 border-orange-400 bg-gray-400 w-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.8834525891811!2d4.857993430947941!3d36.6855095605428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d3b0043aa552f%3A0xdd702986a32dba1f!2sEURL%20Ksentini!5e0!3m2!1sfr!2sdz!4v1725729981409!5m2!1sfr!2sdz"
            width="600"
            height="600"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
