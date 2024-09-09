"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds
    const timeoutId = setTimeout(() => {
      router.push("/fr"); // Redirect to the desired page
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [router]);

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
          <p className="text-black text-2xl text-center font-bold mb-7">
            We will redirect you to a safe place in 3 seconds, or you can click
          </p>
          <Link
            href="/fr"
            className="text-white bg-orange-400 py-3 px-6 rounded"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
