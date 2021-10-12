import { useEffect, useState } from "react";
import Head from "next/head";
import OrderItem from "../../components/orderItem";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Order.module.scss";
import FarmerNavbar from "../../components/farmNavbar";
import FarmerBreadcrumbs from "../../components/farmerBreadcrumbs";
import ResponsiveDrawer from "../../components/farmerSideBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";

export default function Cart() {
  const user = useUser();
  const [orderList, setOrders] = useState([]);
  const [filteredList, setFiltered] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}farm-orders`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.data);
        setFiltered(orderList);
        mapOrders();
        setCount(0)
      });
  }, []);

  const filterOrder = (id) => {
    const newOrders = orderList.filter((d) => d.status_id === id);
    setFiltered(newOrders);
    mapOrders();
    setCount()
  };

  const getAllOrders = () => {
    setFiltered(orderList);
    setCount(1)
  };

  var orders = filteredList.map((c, i) => (
    <OrderItem
      key={i}
      image={c.image}
      product_name={c.product_name}
      status={c.status}
      price={c.price}
      amount={c.amount}
      note={c.note}
      is_delivery={c.is_delivery}
      city={c.city}
      state={c.state}
      postal_code={c.postal_code}
      street_address={c.street_address}
      weight={c.weight}
      first_name={c.first_name}
      last_name={c.last_name}
    />
  ));

  const mapOrders = () => {
    orders = [];
    orders = filteredList.map((c, i) => (
      <OrderItem
        key={i}
        image={c.image}
        product_name={c.product_name}
        status={c.status}
        price={c.price}
        amount={c.amount}
        note={c.note}
        is_delivery={c.is_delivery}
        city={c.city}
        state={c.state}
        postal_code={c.postal_code}
        street_address={c.street_address}
        weight={c.weight}
        first_name={c.first_name}
        last_name={c.last_name}
      />
    ));
  };

  const CustomButton = withStyles({
    root: {
      fontFamily: "'Poppins', sans-serif !important",
    },
    label: {
      textTransform: "capitalize",
    },
  })((props) => <Button {...props} />);

  return (
    <div>
      <Head>
        <title>Farm Orders | Growcery</title>
      </Head>
      <FarmerNavbar />
      <ResponsiveDrawer />
      <main className={styles.orders}>
        <FarmerBreadcrumbs
        string2="Orders"
        string3="My Orders" />
        <div>
          <h1>My Orders</h1>
        </div>
        <div className={styles.orders_container}>
          <Grid container>
            <Grid item xs={8}>
              <div className={styles.orders_statusButtons}>
                <ButtonGroup
                  variant="text"
                  aria-label="text primary button group"
                >
                  <CustomButton onClick={() => getAllOrders()}>
                    All Orders
                  </CustomButton>
                  <CustomButton onClick={() => filterOrder(1)}>
                    Waiting For Payment
                  </CustomButton>
                  <CustomButton onClick={() => filterOrder(2)}>
                    Confirmed
                  </CustomButton>
                  <CustomButton onClick={() => filterOrder(3)}>
                    Shipped
                  </CustomButton>
                  <CustomButton onClick={() => filterOrder(4)}>
                    Ready
                  </CustomButton>
                  <CustomButton onClick={() => filterOrder(5)}>
                    Completed
                  </CustomButton>
                </ButtonGroup>
              </div>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}>
              <p className={styles.orders_countOrder}>
                {filteredList.length} Order(s)
              </p>
            </Grid>
          </Grid>
          <hr className={styles.orders_line} />
          {count == 0? filteredList.map((c, i) => (
              <OrderItem
                key={i}
                image={c.image}
                product_name={c.product_name}
                status={c.status}
                price={c.price}
                amount={c.amount}
                note={c.note}
                is_delivery={c.is_delivery}
                city={c.city}
                state={c.state}
                postal_code={c.postal_code}
                street_address={c.street_address}
                weight={c.weight}
                first_name={c.first_name}
                last_name={c.last_name}
              />
            )) : orders}
          {/* {orders} */}
        </div>
      </main>
    </div>
  );
}