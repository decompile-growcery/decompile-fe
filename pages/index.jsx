import Head from 'next/head'
import ProductList from '../components/productList'
import HomePageSection from '../components/homePageSection'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import { Disc, Award } from 'react-feather'
import Grid from "@material-ui/core/Grid";
import styles from '../styles/pages/Home.module.scss'
import Image from "next/image";
import Dairy from "../public/Dairy.svg";
import Fruits from "../public/Fruits.svg";
import Grains from "../public/Grains.svg";
import Meat from "../public/Meat.svg";
import Others from "../public/Others.svg";
import Vegetables from "../public/Vegetables.svg";
import Link from "next/link";

export default function Home({products}) {  
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
            <div className={styles.home_containerDiv}>
            <Grid container className={styles.home_cont}>
              <Grid item className={styles.home_logoItem} md={2}>
                <Link href="/product/dairy">
                  <Image src={Dairy} alt="dairy" />
                </Link>
                <p>Dairy</p>
              </Grid>
              <Grid item className={styles.home_logoItem} xs={2}>
                <Link href="/product/meat">
                  <Image src={Meat} alt="meat" />
                </Link>
                  <p>Meat</p>
              </Grid>
              <Grid item className={styles.home_logoItem} xs={2}>
                <Link href="/product/fruits">
                  <Image src={Fruits} alt="fruits" />
                </Link>
                <p>Fruits</p>
              </Grid>
              <Grid item className={styles.home_logoItem} xs={2}>
                <Link href="/product/vegetables">
                  <Image src={Vegetables} alt="vegetables" />
                </Link>
                <p>Vegetables</p>
              </Grid>
              <Grid item className={styles.home_logoItem} xs={2}>
                <Link href="/product/grains">
                  <Image src={Grains} alt="grains" />
                </Link>
                <p>Grains</p>
              </Grid>
              <Grid item className={styles.home_logoItem} xs={2}>
                <Link href="/product/others">
                  <Image src={Others} alt="others" />
                </Link>
                <p>Others</p>
              </Grid>
            </Grid>
            </div>
            <HomePageSection icon={<Award />} title="Products" />
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
