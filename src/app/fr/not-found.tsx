import Link from "next/link";

import data from "@/Json/fr.json";
const locale = "fr";

export default function NotFound() {
  return (
    <div className="mt-[105px] containers flex flex-col justify-center items-center h-[50vh]">
      <h1 className="text-black text-7xl text-center font-bold mb-1">404</h1>
      <p className="text-orange-400 text-5xl text-center font-bold mb-7">
        {data["NotFound"].text}
      </p>
      <Link
        href={`/${locale}`}
        className="text-white bg-orange-400 py-3 px-6 rounded"
      >
        {data["NotFound"].button}
      </Link>
    </div>
  );
}
