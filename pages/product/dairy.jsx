import Head from 'next/head'
import ProductList from '../../components/productList'
import Navbar from '../../components/navbar'
import styles from '../../styles/pages/Category.module.scss'
import Image from "next/image";
import Dairy from "../../public/Dairy.svg";
import Arrow from "../../public/arrow.svg";
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
      <main className={styles.category}>
            <div className={styles.category_containerDiv}>
                <div className={styles.category_arrow} >
                    <Link href="/">
                        <Image src={Arrow} alt="arrow" />
                    </Link>
                </div>
                <Image src={Dairy} alt="dairy" />
                <h2 className={styles.category_text}>Dairy</h2>
            </div>
            <ProductList products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}products?category_id=3`);
  let data = "";
  if (res) 
    data = await res.json();

  return {
    props: {
      products: data.data || "",
    }
  }
}