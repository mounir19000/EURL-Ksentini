"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const homePageSlider = () => {
  return (
    <div>
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
        <SwiperSlide className="overflow-hidden">
          <div className="relative sliderHomePage">
            <div className="absolute inset-0 bg-[url('/homepageSlider/1.jpg')] animate-zoom sliderHomePageBg"></div>
            <div className="containers relative z-10 h-full flex items-center">
              <h1 className="text-5xl sm:text-7xl font-bold text-white">
                Travaux de Génie Civil
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="relative sliderHomePage">
            <div className="absolute inset-0 bg-[url('/homepageSlider/1.jpg')] animate-zoom sliderHomePageBg"></div>
            <div className="containers relative z-10 h-full flex items-center">
              <h1 className="text-3xl sm:text-7xl font-bold text-white">
                Infrastructures énergétiques
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="relative sliderHomePage">
            <div className="absolute inset-0 bg-[url('/homepageSlider/1.jpg')] animate-zoom sliderHomePageBg"></div>
            <div className="containers relative z-10 h-full flex items-center">
              <h1 className="text-5xl sm:text-7xl font-bold text-white">
                Ligne et poste électrique HT / THT
              </h1>
            </div>
          </div>
        </SwiperSlide>
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
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center w-full">
              <Image
                src="/Logos/Logo1.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default homePageSlider;
