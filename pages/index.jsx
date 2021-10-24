import Head from "next/head";
import ProductList from "../components/productList";
import HomePageSection from "../components/homePageSection";
import Banner from "../components/banner";
import Navbar from "../components/navbar";
import { Disc, Award } from "react-feather";
import Grid from "@material-ui/core/Grid";
import styles from "../styles/pages/Home.module.scss";
import Image from "next/image";
import Dairy from "../public/Dairy.svg";
import Fruits from "../public/Fruits.svg";
import Grains from "../public/Grains.svg";
import Meat from "../public/Meat.svg";
import Others from "../public/Others.svg";
import Vegetables from "../public/Vegetables.svg";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Growcery | Shop for anything fresh!</title>
        <meta
          name="description"
          content="Shop directly from farmers | Growcery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.home}>
        <Banner />
        <HomePageSection icon={<Disc />} title="Category" />
        <div className={styles.home_containerDiv}>
          <Grid container className={styles.home_cont}>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/dairy">
                <div>
                  <Image src={Dairy} alt="dairy" width={50} height={50} />
                  <p className={styles.home_text}>Dairy</p>
                </div>
              </Link>
            </Grid>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/meat">
                <div>
                  <Image src={Meat} alt="meat" width={50} height={50} />
                  <p className={styles.home_text}>Meat</p>
                </div>
              </Link>
            </Grid>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/fruits">
                <div>
                  <Image src={Fruits} alt="fruits" width={50} height={50} />
                  <p className={styles.home_text}>Fruits</p>
                </div>
              </Link>
            </Grid>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/vegetables">
                <div>
                  <Image
                    src={Vegetables}
                    alt="vegetables"
                    width={50}
                    height={50}
                  />
                  <p className={styles.home_text}>Vegetables</p>
                </div>
              </Link>
            </Grid>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/grains">
                <div>
                  <Image src={Grains} alt="grains" width={50} height={50} />
                  <p className={styles.home_text}>Grains</p>
                </div>
              </Link>
            </Grid>
            <Grid item className={styles.home_logoItem} xs={2}>
              <Link href="/product/others">
                <div>
                  <Image src={Others} alt="others" width={50} height={50} />
                  <p className={styles.home_text}>Others</p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
        <HomePageSection icon={<Award />} title="Products" />
        <ProductList products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}products`);
  let data = "";
  if (res) data = await res.json();

  return {
    props: {
      products: data.data || "",
    },
  };
}
