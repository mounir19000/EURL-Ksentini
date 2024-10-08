import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
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
    "Besoin de plus d'informations sur nos services en génie civil et montage électrique ? Contactez EURL Ksentini dès maintenant.",
  keywords: "contact, informations, génie civil, montage électrique, Algérie",
};

const Contact = () => {
  const t = useTranslations("Contact");
  const h = useTranslations("Address");
  const locale = useLocale();

  return (
    <div className="w-full bg-slate-200">
      {/* First part of the contact page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              {t("contact")}
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the contact page */}
      <div className="containers py-14 flex flex-col md:flex-row justify-between w-full gap-3">
        {/* Location section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <Link
            href="https://maps.app.goo.gl/VHZa5ftbjJmjR9hz8"
            target="_blank"
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image src={Loction} alt="Location Icon" width={35} height={35} />
          </Link>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">{t("title1")}</h1>
            <p className="text-center w-2/3">{h("address")}</p>
          </div>
        </div>
        {/* Phone section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image src={Phone} alt="Phone Icon" width={35} height={35} />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">{t("title2")}</h1>
            <p className="text-center" dir="ltr">
              +213 55 66 88 77
            </p>
          </div>
        </div>
        {/* Email section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image src={Mail} alt="Mail Icon" width={35} height={35} />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">{t("title3")}</h1>
            <p className="text-center">blabla@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Third part of the contact page */}
      <div
        className={` ${
          locale === "ar" ? "contactCustomBgAr" : "contactCustomBg"
        }  py-14 `}
      >
        <div className="containers flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1">
            <ContactForm
              title={t("title4")}
              placeholder1={t("placeholder1")}
              placeholder2={t("placeholder2")}
              placeholder3={t("placeholder3")}
              placeholder4={t("placeholder4")}
              button={t("button")}
              button2={t("button2")}
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
