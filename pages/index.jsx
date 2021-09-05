import Head from 'next/head'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import ProductList from '../components/productList'
import HomePageSection from '../components/homePageSection'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import { Disc, Award } from 'react-feather'
import styles from '../styles/pages/Home.module.scss'

export default function Home({products}) {
  console.log(products)
  
  return (
    <div>
      <Head>
        <title>Growcery | Shop for anything fresh!</title>
        <meta name="description" content="Shop directly from farmers | Growcery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.home}>
          <Banner />
            <HomePageSection icon={<Disc />} title="Category" />
            <HomePageSection icon={<Award />} title="Top Selling" />
            <ProductList products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}products`);
  let data = "";
  if (res) 
    data = await res.json();

  return {
    props: {
      products: data.data || "",
    }
  }
}
