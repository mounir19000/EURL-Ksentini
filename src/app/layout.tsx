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
    "EURL Ksentini est une entreprise spécialisée dans le génie civil des postes électriques, le montage et l'installation des lignes électriques, ainsi que le commissioning et la mise en service des équipements électriques en Algérie.",
  keywords:
    "Génie civil, postes électriques, montage, lignes électriques, commissioning, mise en service, EURL Ksentini, Algérie",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eurl-ksentini.netlify.app/",
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
      "EURL Ksentini est une entreprise spécialisée dans le génie civil des postes électriques, le montage et l'installation des lignes électriques, ainsi que le commissioning et la mise en service des équipements électriques en Algérie.",
    images: {
      url: "/OpenGraph.png",
      alt: "Eurl Ksentini",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
