// Component imports
import Gallery from "@/components/gallery";

// Data imports
import Data from "@/Json/galleryImages.json";

const galery = () => {
  return (
    <div className="w-full bg-white">
      {/* First part of the galery page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  bg-gray-600 bg-opacity-50 p-6 w-auto mt-4 mb-7">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white md:max-w-[50vw]">
              EURL-Ksentini en images
            </h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-white md:max-w-[50vw]">
              Notre galerie d'image de nos projet réalisés
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the galery page */}
      <div className="py-10">
        <div className="containers flex flex-col items-center">
          <Gallery galleryID={Data.galleryID} images={Data.images} />
        </div>
      </div>
    </div>
  );
};

export default galery;
