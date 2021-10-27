import Image from "next/image";
import styles from "../styles/components/OrderHistory.module.scss";

export default function OrderHistory({
    key,
    index,
    order_id,
    image,
    product_name,
    amount,
    note,
    is_delivery,
    street_address,
}) {
  return (
    <div className={styles.orderHistory}>
      <div>
        <p className={styles.orderHistory_orderIdBold}>Order id:</p>
        <p className={styles.orderHistory_orderId}>{order_id}</p>
      </div>

      <div className={styles.orderHistory_image}>
        <Image
          className={styles.orderHistory_image}
          src={`${process.env.NEXT_PUBLIC_API_LINK}static/${image}`}
          width={200}
          height={200}
        />
      </div>

      <div>
        <p className={styles.orderHistory_name}>{product_name}</p>
        <p className={styles.orderHistory_desc}>Qty: {amount}</p>
      </div>
      
        <div>
          <p className={styles.orderHistory_descTitle}>Note:</p>
          <p className={styles.orderHistory_desc}>{note ? note:"-"}</p>
        </div> 

      <div>
        <p className={styles.orderHistory_descTitle}>Collection Method:</p>
        <p className={styles.orderHistory_desc}>
          {is_delivery? "Delivery" : "Pick Up"}
        </p>
      </div>

        <div>
            <p className={styles.orderHistory_descTitle}>Pick-Up Address:</p>
            <p className={styles.orderHistory_desc}>{!is_delivery? `${street_address}` : "-"}</p>
        </div> 
    </div>
  );
}
