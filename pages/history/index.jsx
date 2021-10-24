import { useEffect, useState } from "react";
import Head from "next/head";
import OrderItem from "../../components/orderItem";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/History.module.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Navbar from '../../components/navbar'

export default function History() {
  const user = useUser();
  const [orderList, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}order`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        setOrders(data.data);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>My Order History | Growcery</title>
      </Head>
      <Navbar />
      <main className={styles.history}>
        <div>
          <div className={styles.history_container}>
          <Grid container>
            <Grid item xs={8}>
            <div>
              <h1>My Order History</h1>
            </div> 
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}>
              <p className={styles.history_countOrder}>
                {orderList.length} Order(s)
              </p>
            </Grid>
          </Grid>
          <hr className={styles.history_line} />
          {orderList.map((c, i) => (
            <OrderItem
                key={i}
                index={i}
                order_id={c.order_id}
                image={c.image}
                product_name={c.product_name}
                status_id = {c.status_id}
                status={c.status}
                price={c.price}
                amount={c.amount}
                note={c.note}
                is_delivery={c.is_delivery}
                street_address={c.farm_address}
                kind="user"
            />
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}