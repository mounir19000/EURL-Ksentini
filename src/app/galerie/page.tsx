import React from "react";
import Image from "next/image";

// Component imports
import Gallery from "@/components/gallery";

const galery = () => {
  interface GalleryProps {
    galleryID: string;
    images: {
      largeURL: string;
      width: number;
      height: number;
      thumbnailURL: string;
    }[];
  }

  const galleryData: GalleryProps = {
    galleryID: "gallery1",
    images: [
      {
        largeURL: "/galery/1.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/1.JPG",
      },
      {
        largeURL: "/galery/2.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/2.JPG",
      },
      {
        largeURL: "/galery/3.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/3.JPG",
      },
      {
        largeURL: "/galery/4.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/4.JPG",
      },
      {
        largeURL: "/galery/5.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/5.JPG",
      },
      {
        largeURL: "/galery/6.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/6.JPG",
      },
      {
        largeURL: "/galery/7.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/7.JPG",
      },
      {
        largeURL: "/galery/8.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/8.JPG",
      },
      {
        largeURL: "/galery/9.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/9.JPG",
      },
      {
        largeURL: "/galery/10.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/10.JPG",
      },
      {
        largeURL: "/galery/11.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/11.JPG",
      },
      {
        largeURL: "/galery/12.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/12.JPG",
      },
      {
        largeURL: "/galery/13.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/13.JPG",
      },
      {
        largeURL: "/galery/14.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/14.JPG",
      },
      {
        largeURL: "/galery/15.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/15.JPG",
      },
      {
        largeURL: "/galery/16.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/16.JPG",
      },
      {
        largeURL: "/galery/17.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/17.JPG",
      },
      {
        largeURL: "/galery/18.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/18.JPG",
      },
      {
        largeURL: "/galery/19.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/19.JPG",
      },
      {
        largeURL: "/galery/20.JPG",
        width: 500,
        height: 500,
        thumbnailURL: "/galery/20.JPG",
      },
    ],
  };

  return (
    <div className="w-full bg-slate-300">
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
          <Gallery
            galleryID={galleryData.galleryID}
            images={galleryData.images}
          />
        </div>
      </div>
    </div>
  );
};

export default galery;
