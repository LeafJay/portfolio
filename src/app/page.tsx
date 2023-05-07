import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <div className="h-full flex justify-center items-center flex-col">
          <h1 className="font-black text-9xl text-center mb-16">
            Lorem ipsum dolor sit amet, qui minim labore
          </h1>
          <a
            href="#neco-arc-section"
            className="border-black border-4 px-2 py-1 rounded-3xl"
          >
            See more
          </a>
        </div>
      </section>
      <section className="h-screen" id="neco-arc-section">
        <div className="flex gap-4 justify-center items-center h-full">
          <div className="flex-1">
            <h1 className="content-title">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </div>
          <div className="flex-1 relative h-96">
            <Image
              src="/neco.jpg"
              alt="neco arc from the game melty blood"
              fill
              className="h-auto w-auto"
            />
          </div>
        </div>
      </section>

      <section className="h-screen" id="neco-arc-drip-section">
        <div className="flex gap-4 justify-center items-center h-full">
          <div className="flex-1 relative h-96">
            <Image
              src="/neco_drip.jpg"
              alt="neco arc from the game melty blood"
              fill
              className="h-auto w-auto"
            />
          </div>
          <div className="flex-1">
            <h1 className="content-title" >
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
