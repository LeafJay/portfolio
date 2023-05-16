"use client";

import { Link, useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <section className="h-screen">
        <div className="flex w-full h-full space-x-8">
          <div className="flex-1 flex justify-center flex-col h-full space-y-8">
            <h1 className="font-black text-6xl">Websites that make your competition jealous</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates autem eum iure quo beatae ipsum facilis, quisquam maxime, officia, libero mollitia deleniti pariatur nisi distinctio ratione deserunt quidem commodi.</p>
            <a href="/Contact me" className="shadow rounded-lg w-fit p-4 font-semibold">Contact me</a>
          </div>
          <div className="flex-1 flex flex-col justify-center h-full">
            <div className="relative flex-grow my-40">
              <Image src="/neco.jpg" alt="a neco arc image" fill/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
