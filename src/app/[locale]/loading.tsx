import Loader from "@/components/loader";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Loading() {
  const locale = useLocale();

  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] bg-white mt-[105px]">
      {locale === "ar" ? (
        <Image
          src="/logoAr.png"
          alt="Logo"
          width={950}
          height={262}
          className="loading-logo pb-10"
        />
      ) : (
        <Image
          src="/logo.png"
          alt="Logo"
          width={835}
          height={192}
          className="loading-logo pb-10"
        />
      )}
      <Loader />
    </div>
  );
}
