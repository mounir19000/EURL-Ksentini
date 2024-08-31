"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const homePageSlider = () => {
  const slides = [
    {
      title: "Génie civil des postes électriques",
      bg: "/homePageSlider/1.JPG",
    },
    {
      title: "Montage et Installation des lignes électriques",
      bg: "/homePageSlider/2.JPG",
    },
    {
      title: "Montage et Installation des postes électriques",
      bg: "/homePageSlider/3.JPG",
    },
    {
      title: "Commissioning et Mise en service des postes électriques",
      bg: "/homePageSlider/4.JPG",
    },
  ];
  const slides2 = [
    {
      img: "/homePageLogosSlider/1.png",
      alt: "GRTE",
      width: 297,
      height: 96,
    },
    {
      img: "/homePageLogosSlider/2.png",
      alt: "SONELGAZ",
      width: 852,
      height: 1200,
    },
    {
      img: "/homePageLogosSlider/3.png",
      alt: "KAHRAKIB",
      width: 112,
      height: 161,
    },
    {
      img: "/homePageLogosSlider/4.png",
      alt: "KAHRIF",
      width: 83,
      height: 112,
    },
    {
      img: "/homePageLogosSlider/5.png",
      alt: "ETTARKIB",
      width: 134,
      height: 168,
    },
    {
      img: "/homePageLogosSlider/6.png",
      alt: "COSIDER",
      width: 2389,
      height: 488,
    },
    {
      img: "/homePageLogosSlider/7.png",
      alt: "EnergoInvest",
      width: 600,
      height: 600,
    },
  ];

  return (
    <div className="pt-[105px]">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        // slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className="overflow-hidden" key={index}>
              <div className="relative sliderHomePage">
                <div
                  className="absolute inset-0 animate-zoom sliderHomePageBg"
                  style={{ backgroundImage: `url("${slide.bg}")` }}
                ></div>
                <div className="containers relative z-10 h-full flex items-center  ">
                  <h1
                    className={`text-5xl sm:text-7xl font-bold text-white bg-gray-600 bg-opacity-60 p-6 w-auto`}
                  >
                    {slide.title}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="py-6">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.50": {
              slidesPerView: 3,
            },
            "@0.75": {
              slidesPerView: 5,
            },
            "@1.00": {
              slidesPerView: 7,
            },
            "@1.50": {
              slidesPerView: 6,
            },
          }}
        >
          {slides2.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-auto w-full">
                <Image
                  src={slide.img}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  style={{ height: "120px", width: "auto" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default homePageSlider;
