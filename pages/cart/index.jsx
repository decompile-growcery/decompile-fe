import { useEffect, useState } from "react";
import Head from "next/head";
import deleteData from "../../lib/utils/deleteData";
import CartItem from "../../components/cartItem";
import Navbar from "../../components/navbar";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Cart.module.scss";

export default function Cart() {
  const user = useUser();
  const [cart, setCart] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}cart`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setCart(data.data.map((d) => ({ ...d, checked: false })))
      );
  }, []);

  const updateQty = (id, newQty) => {
    const newCart = cart.map((c) =>
      c.product_id === id ? { ...c, quantity: newQty } : c
    );
    setCart(newCart);
  };

  const toggleItem = (id) => {
    const newCart = cart.map((c) =>
      c.product_id === id ? { ...c, checked: !c.checked } : c
    );
    setCart(newCart);
  };

  const deleteItem = (id) => {
    const data = new URLSearchParams({
      product_id: id,
    });
    deleteData(data, "cart/delete", user);
    const newCart = cart.filter((c) => c.product_id !== id);
    console.log(newCart);
    setCart(newCart);
  }

  const totalCost = cart
    .reduce((total, items) => total + items.quantity * items.product_price, 0)
    .toFixed(2);

  const handleCheckedAll = () => {
    setCheckedAll(!checkedAll);
    const newCart = cart.map((c) => ({ ...c, checked: !c.checked }));
    setCart(newCart);
  };

  return (
    <div>
      <Head>
        <title>Cart | Growcery</title>
      </Head>
      <Navbar />
      <main className={styles.cart}>
        <div>
          <h1>My Shopping Cart</h1>
        </div>

        <div className={styles.cart_container}>
            {cart.map((c) => (
              <CartItem
                key={c.product_id}
                name={c.product_name}
                id={c.product_id}
                price={c.product_price}
                qty={c.quantity}
                img={c.image}
                checked={c.checked}
                updateQty={updateQty}
                toggleItem={toggleItem}
                deleteItem={deleteItem}
              />
            ))}
        </div>
        <div className={styles.cart_checkout}>
          <input
            checked={checkedAll}
            onChange={handleCheckedAll}
            className={styles.cart_checkout_checkbox}
            type="checkbox"
          />
          <p>Select all ({cart.length})</p>
          <div className={styles.cart_checkout_prompt}>
            <p>
              Total ({cart.length} Products):{" "}
              <span className={styles.cart_checkout_price}>${totalCost}</span>
            </p>
            <button className={styles.cart_checkout_button}>checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
}
