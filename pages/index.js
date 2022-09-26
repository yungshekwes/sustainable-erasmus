import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head className="text-3xl font-bold underline">
        Hello world!
      </Head>
      <Navbar />
    </div>
  )
}
