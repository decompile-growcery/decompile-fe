import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home({products}) {
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

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}products`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    }
  }
}
