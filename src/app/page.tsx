// components imports
import HomePageSlider from "@/components/homePageSlider";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-white">
      <HomePageSlider />

      <div className="bg-[url('/homepageSlider/1.jpg')] bg-cover bg-center">
        <div className="containers flex flex-col md:flex-row items-center justify-center w-full h-full">
          <div className="md:w-[50%] flex-1">
            <div></div>
          </div>
          <div className="md:w-[50%] bg-white px-6 py-8 mt-12 mb-16 rounded-lg flex flex-col items-center justify-center">
            <h1 className="text-start font-bold text-4xl mb-3 w-full">
              Qui somme Nous
            </h1>
            <p className="text-start  w-full mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ex
              aliquam nemo praesentium laboriosam voluptatibus sint ratione
              obcaecati delectus tempora natus a nostrum id sequi animi
              recusandae molestias laborum, excepturi quo sunt ipsa. Nostrum
              reiciendis explicabo, maxime distinctio modi atque error corrupti,
              accusantium deserunt eaque libero doloribus, iure laboriosam
              perferendis quasi provident fugit. Quas, eaque delectus vel veniam
              earum facilis, beatae autem libero ad maxime fuga magni alias
              eius. Dolor laudantium culpa suscipit voluptatibus veritatis.
              Deserunt corrupti quidem libero pariatur, placeat, minima tempora
              fugiat assumenda nostrum nesciunt porro eos eum architecto,
              necessitatibus obcaecati ratione illo reprehenderit voluptatibus
              facere rem delectus!
            </p>
            <div className="w-full flex justify-end">
              <Link
                href={"/contact"}
                className="bg-blue-600 px-6 py-3 rounded text-white font-bold"
              >
                Contactez Nous
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="containers flex flex-col justify-center items-center py-24">
        <h1 className="w-full text-center font-bold text-5xl pb-16">
          Nos Travaux Principals
        </h1>
        <div className="flex flex-wrap">
          <div className="text-center w-full md:w-[50%] pr-0 md:pr-7 py-3 md:py-6">
            Travaux lignes aériennes 30 KV, 60 KV, 220 KV ET 400 KV (Etudes,
            fourniture, travaux de génie civil, montage, déroulage, essaies de
            mise en service et mise en service)
          </div>
          <div className="text-center w-full md:w-[50%] pl-0 md:pl-7 py-3 md:py-6">
            Travaux câble souterrain (Etudes, fourniture, travaux de génie
            civil, montage, déroulage, essaies de mise en service et mise en
            service)
          </div>
          <div className="text-center w-full md:w-[50%] pr-0 md:pr-7 py-3 md:py-6">
            Travaux poste électrique (génie civil et montage de charpente et
            équipements)
          </div>
          <div className="text-center w-full md:w-[50%] pl-0 md:pl-7 py-3 md:py-6">
            Maintenance des lignes MT / HT / THT et installations électriques
          </div>
          <div className="text-center w-full md:w-[50%] pr-0 md:pr-7 py-3 md:py-6">
            Grand travaux Publics et Hydrauliques
          </div>
          <div className="text-center w-full md:w-[50%] pl-0 md:pl-7 py-3 md:py-6">
            Travaux tout corps d’état
          </div>
        </div>
      </div>
    </main>
  );
}
