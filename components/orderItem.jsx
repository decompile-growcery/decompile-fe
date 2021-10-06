import Image from "next/image";
import styles from "../styles/components/OrderItem.module.scss";
import useUser from "../lib/hooks/useUser";

export default function OrderItem({
    key,
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
    last_name
}) {

  const user = useUser();

  return (
    <div className={styles.orderItem}>
        <Image
            className={styles.orderItem_image}
            src={`${process.env.NEXT_PUBLIC_API_LINK}static/${image}`}
            width={128}
            height={128}
        />
        <div>
        <p className={styles.orderItem_name}>{product_name}</p>
        <p className={styles.orderItem_desc}>Qty: {amount}</p>
        </div>
        
        <div>
        <p className={styles.orderItem_descTitle}>Note:</p>
        <p className={styles.orderItem_desc}>{note}</p>
        </div> 

        <div>
        <p className={styles.orderItem_descTitle}>Weight:</p>
        <p className={styles.orderItem_desc}>{weight}kg</p>
        </div> 

        <div>
        <p className={styles.orderItem_descTitle}>Status:</p>
        <p className={styles.orderItem_desc}>{status}</p>
        </div>
        
        <div>
        <p className={styles.orderItem_descTitle}>Price:</p>
        <p className={styles.orderItem_desc}>${price}</p>
        </div> 

        <div>
        <p className={styles.orderItem_descTitle}>Collection Method:</p>
        <p className={styles.orderItem_desc}>{is_delivery? "Delivery":"Pick Up"}</p>
        </div> 

        <div>
        <p className={styles.orderItem_descTitle}>Recipient:</p>
        <p className={styles.orderItem_desc}>{first_name} {last_name}</p>
        </div> 
        
        <div>
        <p className={styles.orderItem_descTitle}>Delivery Address:</p>
        <p className={styles.orderItem_desc}>{is_delivery? `${street_address}, ${state}, ${city} ${postal_code}` :"-"}</p>
        </div> 
    </div>
  );
}
