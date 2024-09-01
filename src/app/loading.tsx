import Loader from "@/components/loader";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] bg-white mt-[105px]">
      <Image src={Logo} alt="Logo" className="loading-logo pb-10" />
      <Loader />
    </div>
  );
}
