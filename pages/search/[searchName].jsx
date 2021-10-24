import Navbar from "../../components/navbar";
import styles from "../../styles/pages/Search.module.scss";
import Head from "next/dist/shared/lib/head";
import ProductList from "../../components/productList";

export default function Search({ searchName }) {
  return (
    <div>
      <Head>
        <title>Growcery | Search Result</title>
        <meta name="description" content="Your search result | Growcery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.search}>
        <div>
          <h2>Showing results for {searchName.product_name}</h2>
        </div>
        <ProductList products={[searchName]} />
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const productName = params.searchName;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}search-products/${productName}/`
  );
  let data = "";
  if (res) data = await res.json();

  return {
    props: {
      searchName: data.data || "",
    },
  };
}
