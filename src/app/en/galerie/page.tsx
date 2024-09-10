// Component imports
import Gallery from "@/components/gallery";
import type { Metadata } from "next";

// Data imports
import imageData from "@/Json/galleryImages.json";
import data from "@/Json/en.json";

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "Explore our gallery showcasing images of our completed projects, highlighting the expertise and accomplishments of EURL Ksentini in the fields of civil engineering, electrical installation, and commissioning services for high-voltage substations and transmission lines.",
  keywords:
    "gallery, images, projects, EURL Ksentini, civil engineering, electrical installation, commissioning, substations, high voltage, transmission lines",
};


const Galery = () => {
  return (
    <div className="w-full bg-white">
      {/* First part of the galery page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-2 md:gap-4  bg-gray-600 bg-opacity-50 p-6 w-auto mt-4 mb-7">
            <h1 className="font-extrabold text-3xl md:text-5xl text-white md:max-w-[50vw]">
              {data["PagesTitles"].gallery1}
            </h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-white md:max-w-[50vw]">
              {data["PagesTitles"].gallery2}
            </h1>
          </div>
        </div>
      </div>

      {/* Second part of the galery page */}
      <div className="py-10">
        <div className="containers flex flex-col items-center">
          <Gallery
            galleryID={imageData.galleryID}
            images={imageData.images}
            button={data["PagesTitles"].button}
          />
        </div>
      </div>
    </div>
  );
};

export default Galery;
