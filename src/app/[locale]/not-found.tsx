import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="mt-[105px] flex flex-col justify-center items-center h-[50vh]">
      <h1 className="text-black text-7xl text-center font-bold">404</h1>
      <p className="text-orange-400 text-5xl text-center font-bold mb-7">
        Page Not Found
      </p>
      <Link href="/" className="text-white bg-orange-400 py-3 px-6 rounded">
        Go Home{" "}
      </Link>
    </div>
  );
}
