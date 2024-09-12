import Link from "next/link";
import OurActivities from "@/components/ourActivities";
import HomePageSlider from "@/components/homePageSlider";

import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: [
    {
      url: "/LogoSmall.png",
      href: "/LogoSmall.png",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/LogoSmall.png",
      href: "/LogoSmall.png",
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
    },
    {
      url: "/LogoSmall.png",
      href: "/LogoSmall.png",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
    },
    {
      url: "/LogoSmall.png",
      href: "/LogoSmall.png",
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
    },
    {
      url: "/LogoSmall.png",
      href: "/LogoSmall.png",
      rel: "mask-icon",
      color: "#000000",
    },
  ],
  title: "Eurl Ksentini",
  description:
    "EURL Ksentini is a company specializing in civil engineering for electrical substations, the assembly and installation of power lines, as well as commissioning and startup of electrical equipment in Algeria.",
  keywords:
    "Civil engineering, electrical substations, assembly, power lines, commissioning, startup, EURL Ksentini, Algeria",
  metadataBase: new URL("https://eurl-ksentini.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
      "ar-AR": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://eurl-ksentini.com/en",
    siteName: "EURL Ksentini",
    images: [
      {
        url: "/OpenGraph.png",
        secureUrl: "/OpenGraph.png",
        width: 1200,
        height: 630,
        alt: "Eurl Ksentini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurl Ksentini",
    description:
      "EURL Ksentini is a company specializing in civil engineering for electrical substations, the assembly and installation of power lines, as well as commissioning and startup of electrical equipment in Algeria.",
    images: {
      url: "/OpenGraph.png",
      alt: "Eurl Ksentini",
    },
  },
};

import data from "@/Json/en.json";
const locale = "en";

export default function Home() {
  const activities1 = data["Activities1"].map((key) => ({
    title: key.title,
    bg: key.bg,
  }));

  const activities2 = data["Activities2"].map((key) => ({
    text: key.text,
    icon: key.icon,
  }));

  return (
    <main className="bg-white">
      <HomePageSlider activities={activities1} />

      <div className="bg-[url('/homePageSlider/1.webp')] bg-cover bg-center">
        <div className="containers py-14 flex flex-col md:flex-row items-center justify-center w-full h-full">
          <div className="md:w-[50%] flex-1">
            <div></div>
          </div>
          <div className="md:w-[50%] bg-white px-7 py-10 mt-12 mb-16 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-start font-bold text-4xl mb-3 w-full">
              <span className="text-ksentini-orange">
                {data["Home"].title1Part1}
              </span>
              <span className="text-ksentini-red">
                {data["Home"].title1Part2}
              </span>
            </h1>
            <p className="text-start w-full mb-1">
              <strong>EURL KSENTINI</strong>
              {data["Home"].text}
            </p>
            <ul className="text-start list-disc w-full pl-8 mb-6">
              <li>{data["Home"].li1}</li>
              <li>{data["Home"].li2}</li>
              <li>{data["Home"].li3}</li>
              <li>{data["Home"].li4}</li>
            </ul>

            <div className="w-full flex justify-end">
              <Link
                href={`/${locale}/contact`}
                className="bg-ksentini-orange hover:bg-ksentini-red px-6 py-3 rounded text-white font-bold"
              >
                {data["Home"].button}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-14 sm:py-24">
        <h1 className="w-full text-center font-bold text-3xl md:text-5xl pb-12 sm:pb-16">
          {data["Home"].title2}
        </h1>
        <OurActivities activities={activities2} />
      </div>
    </main>
  );
}
