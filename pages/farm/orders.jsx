import { useEffect, useState } from "react";
import Head from "next/head";
import OrderItem from "../../components/orderItem";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Order.module.scss";
import FarmerNavbar from "../../components/farmNavbar";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Cart() {
  const user = useUser();
  const [orderList, setOrders] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}farm-orders`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setOrders(data.data.map((d) => ({ ...d })))
      );
  }, []);

  const filterOrder = (id) => {
    const newOrders = orderList.filter((d) => d.status_id == id);
    setOrders(newOrders);
  }
  
  return (
    <div>
      <Head>
        <title>Farm Orders | Growcery</title>
      </Head>
      <FarmerNavbar />
      <main className={styles.orders}>
        <div>
          <h1>  My Orders  </h1>
        </div>

        <div className={styles.orders_container}>
          
            <Grid container>
              <Grid item xs={3}> 
              </Grid>
              <Grid item xs={3}> 
              </Grid>
              <Grid item xs={6}>
                <div className={styles.orders_statusButtons}>
                  <ButtonGroup variant="text" aria-label="text primary button group">
                    <Button onClick={() => filterOrder(1)}>Waiting For Payment</Button>
                    <Button onClick={() => filterOrder(2)}>Payment Confirmed</Button>
                    <Button onClick={() => filterOrder(3)}>Shipped</Button>
                    <Button onClick={() => filterOrder(4)}>Completed</Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          
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
