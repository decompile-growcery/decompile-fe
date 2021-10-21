import { useState } from "react"
import Navbar from "../../components/navbar"
import Head from "next/dist/shared/lib/head"
import searchResult from "../../components/searchResult"
import ProductList from "../../components/productList"

export default function ProductionSearchResult({searchName}) {
  
  return (
    <div>
      <Head>
        <title>Growcery | Search Result</title>
        <meta name="description" content="Your search result | Growcery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <p>Showing results for {searchName.product_name}</p>
        <ProductList products={[searchName]} />
      </main>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const productName = params.searchName;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}search-products/${productName}/`);
  let data = "";
  if (res)
    data = await res.json();
    
  return {
    props: {
      searchName: data.data || "",
    }
  }
}
