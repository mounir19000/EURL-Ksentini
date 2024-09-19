"use client";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import data
import slides from "@/Json/slides.json";

interface Activity {
  title: string;
  bg: string;
}

interface HomePageSliderProps {
  activities: Activity[];
}

const HomePageSlider: React.FC<HomePageSliderProps> = ({ activities }) => {
  return (
    <div className="pt-[105px]">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {activities.map((slide, index) => (
          <SwiperSlide className="overflow-hidden" key={index}>
            <div className="relative sliderHomePage">
              <div
                className="absolute inset-0 animate-zoom sliderHomePageBg"
                style={{ backgroundImage: `url(${slide.bg})` }}
              ></div>
              <div className="containers relative z-10 h-full flex items-center">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white bg-gray-600 bg-opacity-60 p-6 w-auto">
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
          centeredSlides={false}
          spaceBetween={30}
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
              slidesPerView: 6,
            },
          }}
        >
          {slides["logos"].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[120px]">
                <Image
                  src={slide.img}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  style={{ height: "auto", width: "auto", maxHeight: "120px" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageSlider;
