// Components Import
import ReferencesCards from "@/components/referencesCards";

// Data import
import Data from "@/Json/refrences.json";

const References = () => {
  return (
    <div className="w-full bg-slate-200">
      {/* First part of the references page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white">
              EURL-Ksantini sur papier
            </h1>
            <p className="font-semibold text-2xl md:text-3xl text-white">
              Génie civil des postes électriques des postes électriques
            </p>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["1"]} />

      {/* Second part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <p className="font-semibold text-2xl md:text-3xl text-white">
              Montage et Installation des lignes électriques aériennes et
              souterraines
            </p>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["2"]} />

      {/* Third part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <p className="font-semibold text-2xl md:text-3xl text-white">
              Montage et Installation des postes électriques
            </p>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["3"]} />

      {/* Fourth part of the references page */}
      <div className="referencesCoverImage referencesCoverImage1">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center">
            <p className="font-semibold text-2xl md:text-3xl text-white">
              Tests de commissioning et Mise en service des postes électriques
            </p>
          </div>
        </div>
      </div>

      <ReferencesCards projects={Data["4"]} />
    </div>
  );
};

export default References;
