import Head from "next/head";
import Image from "next/image";
import pin from "../images/pin.gif"

export default function Home() {
  return (
    <main className="relative flex items-center h-screen px-6 text-white lg:px-32 bg-gradient-to-tr from-blue-700 to-blue-400">
      <section className="w-full md:w-9/12 xl:w-8/12">
        <h1 className="text-3xl font-bold lg:text-6xl text-inherit">
          Sustainable Erasmus
        </h1>
        <h2 className="text-3xl font-bold lg:text-4xl text-Black">
          Interactive Travel Map
        </h2>
        <h3 className="text-3xl lg:text-2xl text-Black">Click on the pin to get started</h3>
      </section>
      <div>
        <Image src={pin} href="/map" width={708 / 1.5} height={690 / 1.5} />
      </div>
    </main>
  )
}
