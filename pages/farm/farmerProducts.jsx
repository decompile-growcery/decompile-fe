import { useEffect, useState } from "react";
import Head from "next/head";
import FarmerProductItem from "../../components/farmerProductItem";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/FarmerProduct.module.scss";
import FarmerNavbar from "../../components/farmNavbar";
import FarmerBreadcrumbs from "../../components/farmerBreadcrumbs";
import ResponsiveDrawer from "../../components/farmerSideBar";
import Link from "next/link";

export default function FarmerProduct() {
  const user = useUser();

  const [productList, setProducts] = useState([]);
  const [filteredList, setFiltered] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}products?user_id=${user}`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setFiltered(productList);
        mapProducts();
      });
  }, []);

  let products = productList.map((c, i) => (
    <FarmerProductItem
      key={i}
      image={c.image}
      product_id={c.product_id}
      farm_id={c.farm_id}
      farm_name={c.farm_name}
      farm_address={c.farm_address}
      product_name={c.product_name}
      product_desc={c.product_desc}
      product_price={c.product_price}
      unit_weight={c.unit_weight}
      unit_name={c.unit_name}
      stock={c.stock}
      is_fresh={c.is_fresh}
      discount={c.discount}
      image_id={c.image_id}
    />
  ));

  const mapProducts = () => {
    products = [];
    products = productList.map((c, i) => (
      <FarmerProductItem
        key={i}
        image={c.image}
        product_id={c.product_id}
        farm_id={c.farm_id}
        farm_name={c.farm_name}
        farm_address={c.farm_address}
        product_name={c.product_name}
        product_desc={c.product_desc}
        product_price={c.product_price}
        unit_weight={c.unit_weight}
        unit_name={c.unit_name}
        stock={c.stock}
        is_fresh={c.is_fresh}
        discount={c.discount}
        image_id={c.image_id}
      />
    ));
  };

  return (
    <div>
      <Head>
        <title>Farm Products | Growcery</title>
      </Head>
      <FarmerNavbar />
      <ResponsiveDrawer />
      <main className={styles.products}>
        <FarmerBreadcrumbs string2="Products" string3="My Products" />
        <div className={styles.products_addProductContainer}>
          <p className={styles.products_countOrder}>
            {productList.length} Products(s)
          </p>
          <Link href="/farm/addProducts">
            <button
              className={styles.products_addProductContainer_addProductButton}
            >
              + Add New Product
            </button>
          </Link>
        </div>
        <div className={styles.products_container}>
          <hr className={styles.products_titleLine} />
          <div className={styles.products_productTitles}>
            <p className={styles.products_productTitles_product}>Product</p>
            <p className={styles.products_productTitles_stock}>Stock</p>
            <p className={styles.products_productTitles_unitPrice}>
              Unit Price
            </p>
            <p className={styles.products_productTitles_shipping}>Shipping</p>
          </div>
          <hr className={styles.products_line} />
          {products}
        </div>
      </main>
    </div>
  );
}
