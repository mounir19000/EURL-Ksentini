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
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <div className="overflow-hidden flex justify-center items-center w-auto">
              <Image
                src={image.thumbnailURL}
                alt=""
                width={500}
                height={500}
                className="rounded transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-auto"
              />
            </div>
          </a>
        ))}
      </div>
      {showLoadMore && (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Afficher Plus
        </button>
      )}
    </>
  );
};

export default Gallery;
