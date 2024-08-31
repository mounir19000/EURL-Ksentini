import HomePageSlider from "@/components/homePageSlider";
import Link from "next/link";

// components imports
import OurActivities from "@/components/ourActivities";

export default function Home() {
  return (
    <main className=" bg-white">
      <HomePageSlider />

      <div className="bg-[url('/homepageSlider/1.jpg')] bg-cover bg-center">
        <div className="containers py-14 flex flex-col md:flex-row items-center justify-center w-full h-full">
          <div className="md:w-[50%] flex-1">
            <div></div>
          </div>
          <div className="md:w-[50%] bg-white px-7 py-10 mt-12 mb-16 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-start font-bold text-4xl mb-3 w-full">
              <span className="text-ksentini-orange">Qui somme </span>
              <span className="text-ksentini-red">Nous</span>
            </h1>
            <p className="text-start w-full mb-1">
              <strong>EURL KSENTINI</strong> est une entreprise unipersonnelle à
              responsabilité limitée. Elle active, en général, dans le domaine
              de l’énergie et notamment dans les secteurs suivants:
            </p>
            <ul className="text-start list-disc	w-full pl-8 mb-6">
              <li>Génie civil des postes électriques HTB/HTA/BT.</li>
              <li>
                Montage et Installation des lignes électriques aériennes et
                souterraines HTB/HTA/BT.
              </li>
              <li>
                Montage et Installation des postes électriques HTB/HTA/BT.
              </li>
              <li>
                Tests de commissioning et Mise en service des postes électriques
                HTB/HTA/BT.
              </li>
            </ul>

            <div className="w-full flex justify-end">
              <Link
                href={"/contact"}
                className="bg-ksentini-orange hover:bg-ksentini-red px-6 py-3 rounded text-white font-bold"
              >
                Contactez Nous
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-24">
        <h1 className="w-full text-center font-bold text-5xl pb-16">
          Nos Activités Principales
        </h1>
        <OurActivities />
      </div>
    </main>
  );
}
