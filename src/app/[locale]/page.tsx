import { useTranslations, useMessages } from "next-intl";
import { Link } from "@/i18n/routing";
import OurActivities from "@/components/ourActivities";
import HomePageSlider from "@/components/homePageSlider";

export default function Home() {
  const t = useTranslations("Home");
  const h = useTranslations("Activities1");
  const m = useTranslations("Activities2");
  const messages = useMessages();

  const activities1 = Object.keys(messages.Activities1).map((key) => ({
    title: h(`${key}.title`),
    bg: h(`${key}.bg`),
  }));

  const activities2 = Object.keys(messages.Activities2).map((key) => ({
    text: m(`${key}.text`),
    icon: m(`${key}.icon`),
  }));

  return (
    <main className="bg-white">
      <HomePageSlider activities={activities1} />

      <div className="bg-[url('/homepageSlider/1.jpg')] bg-cover bg-center">
        <div className="containers py-14 flex flex-col md:flex-row items-center justify-center w-full h-full">
          <div className="md:w-[50%] flex-1">
            <div></div>
          </div>
          <div className="md:w-[50%] bg-white px-7 py-10 mt-12 mb-16 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-start font-bold text-4xl mb-3 w-full">
              <span className="text-ksentini-orange">{t("title1Part1")}</span>
              <span className="text-ksentini-red">{t("title1Part2")}</span>
            </h1>
            <p className="text-start w-full mb-1">
              <strong>EURL KSENTINI</strong> {t("text")}
            </p>
            <ul className="text-start list-disc w-full pl-8 mb-6">
              <li>{t("li1")}</li>
              <li>{t("li2")}</li>
              <li>{t("li3")}</li>
              <li>{t("li4")}</li>
            </ul>

            <div className="w-full flex justify-end">
              <Link
                href={"/contact"}
                className="bg-ksentini-orange hover:bg-ksentini-red px-6 py-3 rounded text-white font-bold"
              >
                {t("button")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-14 sm:py-24">
        <h1 className="w-full text-center font-bold text-3xl md:text-5xl pb-12 sm:pb-16">
          {t("title2")}
        </h1>
        <OurActivities activities={activities2} />
      </div>
    </main>
  );
}
