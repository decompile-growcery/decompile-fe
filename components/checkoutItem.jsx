import Image from "next/image";
import useForm from "../lib/hooks/useForm";
import styles from "../styles/components/CheckoutItem.module.scss";
import useUser from "../lib/hooks/useUser";

export default function CartItem({ 
  id, 
  price, 
  qty, 
  img, 
  name,
  message,
  handleChangeMessage
}) {
  const user = useUser();

  const handleChange = (e) => {
    handleChangeMessage(id, e.target.value)
  }

  return (
    <div className={styles.checkoutItem_root}>
      <div className={styles.checkoutItem}>
        <Image
          className={styles.checkoutItem_image}
          src={`${process.env.NEXT_PUBLIC_API_LINK}static/${img}`}
          width={128}
          height={128}
        />
        <p className={styles.checkoutItem_name}>{name}</p>
        <p>${price}</p>
        <p>Quantity: {qty}</p>
        <p>Total: ${(qty * price).toFixed(2)}</p>
      </div>
      <div className={styles.checkoutItem_message}>
        <label>Message:</label>
        <input value={message} onChange={handleChange} />
      </div>
    </div>
  );
}
