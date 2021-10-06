import { useEffect, useState } from "react";
import Head from "next/head";
import OrderItem from "../../components/orderItem";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Cart.module.scss";
import FarmerNavbar from "../../components/farmNavbar";

export default function Cart() {
  const user = useUser();
  const [orderList, setOrders] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}farm-orders`, {
      headers: {
        // Authorization: `Bearer ${user}`,
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setOrders(data.data.map((d) => ({ ...d })))
      );
  }, []);

  return (
    <div>
      <Head>
        <title>Farm Orders | Growcery</title>
      </Head>
      <FarmerNavbar />
      <main className={styles.cart}>
        <div>
          <h1>  My Orders  </h1>
        </div>

        <div className={styles.cart_container}>
            {orderList.map((c) => (
              <OrderItem
                key = {c.order_id}
                image = {c.image}
                product_name = {c.product_name}
                status = {c.status}
                price = {c.price}
                amount = {c.amount}
                note = {c.note}
                is_delivery = {c.is_delivery}
                city = {c.city}
                state = {c.state}
                postal_code = {c.postal_code}
                street_address = {c.street_address}
                weight = {c.weight}
                first_name = {c.first_name}
                last_name = {c.last_name}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
