import React from "react";
import Image from "next/image";

const galery = () => {
  return (
    <div className="w-full bg-slate-200">
      {/* First part of the galery page */}
      <div className="CoverImage">
        <div className="h-full containers">
          <div className="h-full flex items-center justify-center flex-col gap-4  ">
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
      <div className="bg-slate-300">
        <div className="containers flex items-center justify-center">
          <div className="gallery grid w-full">
            <Image
              src="/galery/1.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/2.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/3.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/4.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/5.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/6.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/7.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/8.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/9.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/10.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Image
              src="/galery/11.JPG"
              alt=""
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default galery;
