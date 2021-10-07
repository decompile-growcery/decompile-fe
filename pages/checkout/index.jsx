import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Checkout.module.scss";
import paypal from "../../public/paypal.png";
import CheckoutItem from "../../components/checkoutItem";
import postData from "../../lib/utils/postData";
import getData from "../../lib/utils/getData";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Cart() {
  const userToken = useUser();

  const options = {
    pickup: "pick-up",
    delivery: "delivery",
  };

  const [option, setOption] = useState(options.pickup);

  let totalCost = 0;
  let shippingCost = 0;

  let isFilled = false;
  let cartItems = Cookies.get("checkout") ? Cookies.get("checkout") : false;

  if (cartItems) {
    cartItems = JSON.parse(cartItems);
    cartItems = cartItems.map((i) => ({ ...i, message: "" }));
    isFilled = true;

    if (option === options.delivery)
      shippingCost = cartItems.reduce(
        (total, item) => total + item.unit_weight * 0.024,
        0
      );

    let itemCost = cartItems.reduce(
      (total, item) => total + item.quantity * item.product_price,
      0
    );

    totalCost = (itemCost + shippingCost).toFixed(2);
  }

  const [items, setItems] = useState(cartItems ? cartItems : false);

  const handleChangeMessage = (id, msg) => {
    const newItems = items.map((i) =>
      i.product_id === id ? { ...i, message: msg } : i
    );
    setItems(newItems);
  };

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleCheckout = async () => {
    const totalWeight = cartItems.reduce(
      (total, item) => total + item.unit_weight,
      0
    );

    const address = await getData("address", userToken);

    const data = {
      address_id: address[0].id,
      total_price: totalCost,
      product_price: totalCost - shippingCost,
      shipping_cost: shippingCost,
      total_weight: totalWeight,
      is_delivery: option === options.delivery ? 1 : 0,
      product: items.map((i) => ({
        product_id: i.product_id,
        note: i.message,
        amount: i.quantity,
        price: i.product_price,
        weight: i.unit_weight,
      })),
    };

    const [isError, result] = await postData(JSON.stringify(data), "order", userToken);
    console.log("ini di checkout");
    console.log("iserror" + isError);
    console.log("ini di checkout 2");
    console.log(result);
  };

  return (
    <div>
      <Head>
        <title>Checkout | Growcery</title>
      </Head>
      <Navbar />
      <main className={styles.checkout}>
        <div>
          <h1>Checkout</h1>
        </div>
        <div
          className={`${styles.checkout_container} ${styles.checkout_orderOptions}`}
        >
          <h3>Order Options</h3>
          <select value={option} onChange={handleChange}>
            <option value={options.pickup}>Pick-up</option>
            <option value={options.delivery}>Delivery</option>
          </select>
        </div>
        <div className={styles.checkout_container}>
          {isFilled &&
            items.map((c) => (
              <CheckoutItem
                key={c.product_id}
                name={c.product_name}
                id={c.product_id}
                price={c.product_price}
                qty={c.quantity}
                img={c.image}
                message={c.message}
                handleChangeMessage={handleChangeMessage}
              />
            ))}
        </div>
        {option === options.delivery && (
          <div className={styles.checkout_container}>
            <h3>Delivery Fee</h3>
            <div className={styles.checkout_delivery}>
              <h4>Total:</h4>
              <p>${shippingCost}</p>
            </div>
          </div>
        )}
        <div className={styles.checkout_container}>
          <h4>Payment Method</h4>
          <div>
            <Image src={paypal} />
          </div>
        </div>
        <div className={styles.checkout_float}>
          <div className={styles.checkout_float_prompt}>
            <p>
              Total Payment:
              <span className={styles.checkout_float_price}>${totalCost}</span>
            </p>
            <button className={styles.checkout_float_button} onClick={handleCheckout}>
              place order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
