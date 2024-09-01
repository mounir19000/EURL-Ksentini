// Component imports
import Gallery from "@/components/gallery";

// Data imports
import Data from "@/Json/gallery.json";

const galery = () => {
  return (
    <div className="w-full bg-white">
      {/* First part of the galery page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  ">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white">
              EURL-Ksantini en images
            </h1>
            <p className="font-medium text-lg md:text-xl text-white">
              Notre galerie d'image de nos projet réalisés
            </p>
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
