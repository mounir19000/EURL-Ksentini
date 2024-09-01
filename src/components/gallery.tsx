"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Import PhotoSwipe and PhotoSwipeLightbox for the lightbox effect
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface GalleryProps {
  galleryID: string;
  images: {
    largeURL: string;
    width: number;
    height: number;
    thumbnailURL: string;
  }[];
}

const Gallery = (props: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState(6); // Number of initially visible images
  const [showLoadMore, setShowLoadMore] = useState(true); // Whether to show the "Load More" button

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      showHideAnimationType: "zoom",
      showAnimationDuration: 300,
      hideAnimationDuration: 300,

      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [props.galleryID]);

  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 6);
    if (visibleImages >= props.images.length - 6) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <div className="pswp-gallery w-full grid gallery" id={props.galleryID}>
        {props.images.slice(0, visibleImages).map((image, index) => (
          <div
            key={props.galleryID + "-" + index}
            className="overflow-hidden flex justify-center items-center"
          >
            <a
              href={image.largeURL}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 h-full w-full"
            >
              <div className="overflow-hidden flex justify-center items-center w-auto">
                <Image
                  src={image.thumbnailURL}
                  alt=""
                  loading="lazy"
                  width={500}
                  height={500}
                  className="bg-gray-200 rounded transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            </a>
          </div>
        ))}
      </div>
      {showLoadMore && (
        <button
          onClick={handleLoadMore}
          className="font-semibold mt-4 px-8 py-3 bg-orange-400 hover:bg-orange-600 text-white text-lg rounded-lg"
        >
          Afficher Plus
        </button>
      )}
    </>
  );
};

export default Gallery;
