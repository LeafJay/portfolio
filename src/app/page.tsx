import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <div className="h-full flex justify-center items-center flex-col">
          <h1 className="font-black text-9xl text-center mb-16">
            WEB J
          </h1>
          <Link href="/about">
            Call To Action
          </Link>
        </div>
      </section>
    </>
  );
}
