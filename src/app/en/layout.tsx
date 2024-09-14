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
    "EURL Ksentini is a company specializing in civil engineering for electrical substations, the assembly and installation of power lines, as well as commissioning and startup of electrical equipment in Algeria.",
  keywords:
    "Civil engineering, electrical substations, assembly, power lines, commissioning, startup, EURL Ksentini, Algeria",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://eurl-ksentini.com/en",
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
      "EURL Ksentini is a company specializing in civil engineering for electrical substations, the assembly and installation of power lines, as well as commissioning and startup of electrical equipment in Algeria.",
    images: {
      url: "/OpenGraph.png",
      alt: "Eurl Ksentini",
    },
  },
};

import data from "@/Json/en.json";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="min-h-[100vh]">
          <Navbar
            locale={"en"}
            home={data["NavBarAndFooter"].home}
            activities={data["NavBarAndFooter"].activities}
            references={data["NavBarAndFooter"].references}
            gallery={data["NavBarAndFooter"].gallery}
            contact={data["NavBarAndFooter"].contact}
          />
          {children}
          <Footer
            locale={"en"}
            address={data["Address"].address}
            title1={data["NavBarAndFooter"].title1}
            title2={data["NavBarAndFooter"].title2}
            title3={data["NavBarAndFooter"].title3}
            title4={data["NavBarAndFooter"].title4}
            linkedIn={data["NavBarAndFooter"].LinkedIn}
            home={data["NavBarAndFooter"].home}
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
