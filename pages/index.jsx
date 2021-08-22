import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Growcery | Shop for anything fresh!</title>
        <meta name="description" content="Shop directly from farmers | Growcery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
      </main>
    </div>
  )
}
