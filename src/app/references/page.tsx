// Components Import
import ReferencesCards from "@/components/referencesCards";

// Data import
import Data from "@/Json/refrences.json";

const References = () => {
  return (
    <div className="w-full bg-white">
      {/* First part of the references page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  bg-gray-600 bg-opacity-50 p-6 w-auto mt-4 mb-7">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white md:max-w-[50vw]">
              EURL-Ksantini sur papier
            </h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-white md:max-w-[50vw]">
              Génie civil des postes électriques des postes électriques
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["1"]} />

      {/* Second part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              Montage et Installation des lignes électriques aériennes et
              souterraines
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["2"]} />

      {/* Third part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              Montage et Installation des postes électriques
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["3"]} />

      {/* Fourth part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center mt-4 mb-7">
            <h1 className="font-semibold text-2xl md:text-3xl text-white bg-gray-600 bg-opacity-50 p-6 w-auto md:max-w-[50vw]">
              Tests de commissioning et Mise en service des postes électriques
            </h1>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["4"]} />
    </div>
  );
};

export default References;
