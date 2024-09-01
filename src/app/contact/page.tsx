import Image from "next/image";

// Component imports
import ContactForm from "@/components/contactForm";

const contact = () => {
  return (
    <div className="w-full bg-slate-200">
      {/* First part of the contact page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              Contactez Nous Plus D'informations
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the contact page */}
      <div className="containers py-14 flex flex-col md:flex-row justify-between w-full gap-3">
        {/* Location section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image
              src="/LocationIcon.png"
              alt="Location Icon"
              width={35}
              height={35}
            />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">Adresse</h1>
            <p className="text-center w-2/3">
              Lotissement N° : 130/131 EL-KSEUR (W) BEJAIA
            </p>
          </div>
        </div>
        {/* Phone section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image
              src="/PhoneIcon.png"
              alt="Phone Icon"
              width={35}
              height={35}
            />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">téléphone</h1>
            <p className="text-center">+213 55 66 88 77</p>
          </div>
        </div>
        {/* Email section */}
        <div className="flex flex-col justify-start items-center flex-1">
          <a
            href=""
            className="bg-orange-400 hover:bg-orange-800 rounded-[50%] p-2 mb-8"
          >
            <Image src="/MailIcon.png" alt="Mail Icon" width={35} height={35} />
          </a>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl mb-1">Email</h1>
            <p className="text-center">blabla@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Third part of the contact page */}
      <div className="contactCustomBg py-14">
        <div className="containers flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1">
            <ContactForm />
          </div>

          <iframe
            className="flex-1 border-4 border-orange-400 w-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d267.95145167154203!2d4.855133851916838!3d36.68796537771731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1725139710872!5m2!1sfr!2sdz"
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

export default contact;
