import type { Metadata } from "next";
import OurActivities from "@/components/ourActivities";
import { useTranslations, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "Explorez les principales activités de EURL Ksentini, comprenant les études d’ingénierie, le montage des postes électriques, l’électrification ferroviaire et plus encore.",
  keywords:
    "études d'ingénierie, montage électrique, électrification ferroviaire, postes HTB/HTA/BT, éclairage public, Algérie",
};

const Activities = () => {
  const t = useTranslations("PagesTitles");
  const m = useTranslations("Activities2");
  const messages = useMessages();

  const activities2 = Object.keys(messages.Activities2).map((key) => ({
    text: m(`${key}.text`),
    icon: m(`${key}.icon`),
  }));

  return (
    <div className="w-full bg-white">
      {/* First part of the activities page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto  md:max-w-[50vw]">
              {t("activities")}
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the activities page */}
      <div className="pb-6 pt-6">
        <OurActivities activities={activities2} />
      </div>
    </div>
  );
};

export default Activities;
