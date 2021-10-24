import Image from "next/image";
import styles from "../styles/components/OrderItem.module.scss";
import EditOrderDialog from "./editOrder";

export default function OrderItem({
    key,
    index,
    order_id,
    image,
    product_name,
    status,
    price,
    amount,
    note,
    is_delivery,
    city,
    state,
    postal_code,
    street_address,
    weight,
    first_name,
    last_name,
    kind = "farm"
}) {
  return (
    <div className={styles.orderItem}>
      <div>
        <p className={styles.orderItem_orderIdBold}>Order id:</p>
        <p className={styles.orderItem_orderId}>{order_id}</p>
      </div>

      <div className={styles.orderItem_image}>
        <Image
          className={styles.orderItem_image}
          src={`${process.env.NEXT_PUBLIC_API_LINK}static/${image}`}
          width={100}
          height={100}
        />
      </div>

      <div>
        <p className={styles.orderItem_name}>{product_name}</p>
        <p className={styles.orderItem_desc}>Qty: {amount}</p>
      </div>

      <div>
        <p className={styles.orderItem_descTitle}>Weight:</p>
        <p className={styles.orderItem_desc}>{weight}kg</p>
      </div>

        <div>
          <p className={styles.orderItem_name}>{product_name}</p>
          <p className={styles.orderItem_desc}>Qty: {amount}</p>
        </div>
        
        {kind == "farm" ?  <div>
          <p className={styles.orderItem_descTitle}>Recipient:</p>
          <p className={styles.orderItem_desc}>{first_name} {last_name}</p>
        </div> 
        : null}

        {kind == "farm" ? 
        <div>
        <p className={styles.orderItem_descTitle}>Weight:</p>
        <p className={styles.orderItem_desc}>{weight}kg</p>
        </div> 
        : null}
      
        <div>
          <p className={styles.orderItem_descTitle}>Note:</p>
          <p className={styles.orderItem_desc}>{note ? note:"-"}</p>
        </div> 

      <div>
        <p className={styles.orderItem_descTitle}>Collection Method:</p>
        <p className={styles.orderItem_desc}>
          {is_delivery ? "Delivery" : "Pick Up"}
        </p>
      </div>

      <div>
        <p className={styles.orderItem_descTitle}>Recipient:</p>
        <p className={styles.orderItem_desc}>
          {first_name} {last_name}
        </p>
      </div>

        {kind == "farm" ? <div>
          <p className={styles.orderItem_descTitle}>Recipient:</p>
          <p className={styles.orderItem_desc}>{first_name} {last_name}</p>
        </div> : <div></div>}
        
        {kind == "farm" ? <div>
          <div>
            <p className={styles.orderItem_descTitle}>Delivery Address:</p>
            <p className={styles.orderItem_desc}>{is_delivery? `${street_address}, ${state}, ${city} ${postal_code}` :"-"}</p>
          </div> 
        </div> : <div>
            <p className={styles.orderItem_descTitle}>Pick-Up Address:</p>
            <p className={styles.orderItem_desc}>{is_delivery ? `${street_address}` : "-"}</p>
          </div> }
        
        {kind == "farm" ? <div>
          <EditOrderDialog
          key={index}
          order_id={order_id}
          />
        </div> : <div></div>}
    </div>
  );
}
