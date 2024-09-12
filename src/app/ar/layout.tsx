import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components import
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

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
    "شركة EURL Ksentini متخصصة في الهندسة المدنية لمحطات الكهرباء، تركيب وتثبيت خطوط الكهرباء، وكذلك التكليف وتشغيل المعدات الكهربائية في الجزائر.",
  keywords:
    "الهندسة المدنية، محطات الكهرباء، التركيب، خطوط الكهرباء، التكليف، التشغيل، EURL Ksentini، الجزائر",
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://eurl-ksentini.com/ar",
    siteName: "EURL Ksentini",
    images: [
      {
        url: "/OpenGraph.png",
        secureUrl: "/OpenGraph.png",
        width: 600,
        height: 200,
        alt: "Eurl Ksentini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurl Ksentini",
    description:
      "شركة EURL Ksentini متخصصة في الهندسة المدنية لمحطات الكهرباء، تركيب وتثبيت خطوط الكهرباء، وكذلك التكليف وتشغيل المعدات الكهربائية في الجزائر.",
    images: {
      url: "/OpenGraph.png",
      alt: "Eurl Ksentini",
    },
  },
};

import data from "@/Json/ar.json";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-[100vh]">
          <Navbar
            locale={"ar"}
            home={data["NavBarAndFooter"].home}
            activities={data["NavBarAndFooter"].activities}
            references={data["NavBarAndFooter"].references}
            gallery={data["NavBarAndFooter"].gallery}
            contact={data["NavBarAndFooter"].contact}
          />
          {children}
          <Footer
            locale={"ar"}
            address={data["Address"].address}
            title1={data["NavBarAndFooter"].title1}
            title2={data["NavBarAndFooter"].title2}
            title3={data["NavBarAndFooter"].title3}
            activities={data["NavBarAndFooter"].activities}
            references={data["NavBarAndFooter"].references}
            gallery={data["NavBarAndFooter"].gallery}
            contact={data["NavBarAndFooter"].contact}
          />
        </div>
      </body>
    </html>
  );
}
