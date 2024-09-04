import { useTranslations, useMessages } from "next-intl";

// Components Import
import ReferencesCards from "@/components/referencesCards";

// Data import
import Data from "@/Json/refrences.json";

const References = () => {
  const n = useTranslations("PagesTitles");
  const t = useTranslations("references1");
  const h = useTranslations("references2");
  const m = useTranslations("references3");
  const p = useTranslations("references4");
  const messages = useMessages();

  const references1 = Object.keys(messages.references1).map((key) => ({
    img: t(`${key}.img`),
    alt: t(`${key}.alt`),
    width: Number(t(`${key}.width`)),
    height: Number(t(`${key}.height`)),
    client: t(`${key}.client`),
    date: t(`${key}.date`),
    description: t(`${key}.description`),
  }));

  const references2 = Object.keys(messages.references2).map((key) => ({
    img: h(`${key}.img`),
    alt: h(`${key}.alt`),
    width: Number(h(`${key}.width`)),
    height: Number(h(`${key}.height`)),
    client: h(`${key}.client`),
    date: h(`${key}.date`),
    description: h(`${key}.description`),
  }));

  const references3 = Object.keys(messages.references3).map((key) => ({
    img: m(`${key}.img`),
    alt: m(`${key}.alt`),
    width: Number(m(`${key}.width`)),
    height: Number(m(`${key}.height`)),
    client: m(`${key}.client`),
    date: m(`${key}.date`),
    description: m(`${key}.description`),
  }));

  const references4 = Object.keys(messages.references4).map((key) => ({
    img: p(`${key}.img`),
    alt: p(`${key}.alt`),
    width: Number(p(`${key}.width`)),
    height: Number(p(`${key}.height`)),
    client: p(`${key}.client`),
    date: p(`${key}.date`),
    description: p(`${key}.description`),
  }));

  return (
    <div className="w-full bg-white mb-3">
      {/* First part of the references page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  bg-gray-600 bg-opacity-50 p-6 w-auto mt-4 mb-7">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white md:max-w-[50vw]">
              {n("references1")}
            </h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-white md:max-w-[50vw]">
              {n("references2")}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={references1} button={n("button")} />

      {/* Second part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {n("references3")}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={references2} button={n("button")} />

      {/* Third part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {n("references4")}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={references3} button={n("button")} />

      {/* Fourth part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {n("references5")}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={references4} button={n("button")} />
    </div>
  );
};

export default References;
