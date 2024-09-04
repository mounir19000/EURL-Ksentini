import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

// Components import
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eurl Ksentini",
  description:
    "Welcome to Eurl Ksentini, your trusted partner for innovative solutions.",
  keywords: "Eurl Ksentini, innovative solutions, trusted partner",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-[100vh]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
