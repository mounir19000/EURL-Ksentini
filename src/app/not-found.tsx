"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="containers flex flex-col justify-center items-center h-[100vh]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={835}
            height={192}
            className="w-[60vw] max-w-[600px] pb-6"
          />
          <p className="text-orange-400 text-5xl text-center font-bold mb-7">
            Page Not Found
          </p>
          <Link href="/" className="text-white bg-orange-400 py-3 px-6 rounded">
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
