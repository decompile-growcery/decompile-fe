import { Grid } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image"
import Navbar from "../../components/navbar";
import styles from "../../styles/pages/Product.module.scss";

export default function Login({product}) {
  console.log(product)
  return (
    <div>
      <Head>
        <title>{product.product_name} | {product.product_desc}  </title>
        <meta
          name="description"
          content="Shop directly from farmers | Growcery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.product}>
        <Grid container>
          <Grid item sm={12} md={5}>
            <Image 
                src={`${process.env.NEXT_PUBLIC_API_LINK}static/${product.image}`}
                width={400}
                height={400}
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <div className={styles.product_detail}>
              <h1 className={styles.product_name}>{product.product_name}</h1>
              <p className={styles.product_weight}>{product.unit_weight} {product.unit_name}</p>
              <h2 className={styles.product_price}>${product.product_price}</h2>
              <button className={styles.product_btn}>Add to Cart</button>
              <div className={styles.product_description}>
                <h3>Product Description</h3>
                <p>{product.product_desc}</p>
              </div>
              <div className={styles.product_farm}>
                <h3>Farmer or Supplier</h3>
                <p>{product.farm_name}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export async function getServerSideProps({params}) {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}product/${id}`);
  let data = "";
  if (res) 
    data = await res.json();

  return {
    props: {
      product: data.data[0] || "",
    }
  }
}

