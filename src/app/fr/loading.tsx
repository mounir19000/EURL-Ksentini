import Loader from "@/components/loader";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] bg-white mt-[105px]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={835}
        height={192}
        className="loading-logo pb-10"
      />
      <Loader />
    </div>
  );
}
