import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-row items-center justify-center gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* <Image src="/logo.png" alt="logo" width={200} height={200}></Image> */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Welcome to</h1>
        <h1 className="text-4xl font-black">
          SWEEP CDO Decision Support System
        </h1>
        <h1 className="italic text-base font-medium">
          Decision Support System for MSWtE Solutions in Cagayan de Oro City
        </h1>
        <Link
          href="/login"
          className="w-fit rounded-full transform transition duration-500 hover:scale-110 py-2 px-10 mt-8 bg-foreground text-background"
        >
          Log In
        </Link>
      </div>
    </main>
  );
}
