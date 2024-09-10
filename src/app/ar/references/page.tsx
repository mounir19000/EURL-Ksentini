import type { Metadata } from "next";

// Components Import
import ReferencesCards from "@/components/referencesCards";

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "اكتشفوا إنجازاتنا في مجال الهندسة المدنية، تركيب خطوط الكهرباء، وتشغيل المعدات الكهربائية في الجزائر.",
  keywords:
    "مراجع، أعمال الهندسة المدنية، تركيب الخطوط، المعدات الكهربائية، الجزائر",
};


import data from "@/Json/ar.json";

const References = () => {
  const references1 = data["references1"].map((key) => ({
    img: key.img,
    alt: key.alt,
    width: key.width,
    height: key.height,
    client: key.client,
    date: key.date,
    description: key.description,
  }));

  const references2 = data["references2"].map((key) => ({
    img: key.img,
    alt: key.alt,
    width: key.width,
    height: key.height,
    client: key.client,
    date: key.date,
    description: key.description,
  }));

  const references3 = data["references3"].map((key) => ({
    img: key.img,
    alt: key.alt,
    width: key.width,
    height: key.height,
    client: key.client,
    date: key.date,
    description: key.description,
  }));

  const references4 = data["references4"].map((key) => ({
    img: key.img,
    alt: key.alt,
    width: key.width,
    height: key.height,
    client: key.client,
    date: key.date,
    description: key.description,
  }));

  return (
    <div className="w-full bg-white mb-3">
      {/* First part of the references page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  bg-gray-600 bg-opacity-50 p-6 w-auto mt-4 mb-7">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white md:max-w-[50vw]">
              {data["PagesTitles"].references1}
            </h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-white md:max-w-[50vw]">
              {data["PagesTitles"].references2}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards
        projects={references1}
        button={data["PagesTitles"].button}
        locale="ar"
      />

      {/* Second part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {data["PagesTitles"].references3}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards
        projects={references2}
        button={data["PagesTitles"].button}
        locale="ar"
      />

      {/* Third part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {data["PagesTitles"].references4}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards
        projects={references3}
        button={data["PagesTitles"].button}
        locale="ar"
      />

      {/* Fourth part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              {data["PagesTitles"].references5}
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards
        projects={references4}
        button={data["PagesTitles"].button}
        locale="ar"
      />
    </div>
  );
};

export default References;
