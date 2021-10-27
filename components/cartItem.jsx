import Image from "next/image";
import { IconButton, Tooltip } from "@material-ui/core";
import { AddCircle, RemoveCircle, Delete } from "@material-ui/icons";
import postData from "../lib/utils/postData";
import deleteData from "../lib/utils/deleteData";
import styles from "../styles/components/CartItem.module.scss";
import useUser from "../lib/hooks/useUser";

export default function CartItem({
  id,
  price,
  qty,
  img,
  name,
  checked,
  updateQty,
  toggleItem,
  deleteItem,
}) {
  const user = useUser();
  const addItem = () => {
    const data = new URLSearchParams({
      product_id: id,
    });

    postData(data, "cart/add", user);
    updateQty(id, qty + 1);
  };

  const removeItem = () => {
    if (qty > 1) {
      const data = new URLSearchParams({
        product_id: id,
      });
      deleteData(data, "cart/remove", user);
      updateQty(id, qty - 1);
    }
  };

  const handleChange = () => {
    toggleItem(id);
  };

  return (
    <div className={styles.cartItem}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <Image
        className={styles.cartItem_image}
        src={`${process.env.NEXT_PUBLIC_API_LINK}static/${img}`}
        width={128}
        height={128}
      />
      <p className={styles.cartItem_name}>{name}</p>
      <p>${price}</p>
      <div className={styles.cartItem_quantity}>
        <Tooltip title="Decrease item">
          <IconButton onClick={removeItem}>
            <RemoveCircle />
          </IconButton>
        </Tooltip>
        <span>{qty}</span>
        <Tooltip title="Increase item">
          <IconButton onClick={addItem}>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </div>
      <p>Total: ${(qty * price).toFixed(2)}</p>
      <div className={styles.cartItem_delete}>
        <Tooltip title="Remove item from cart">
          <IconButton onClick={() => deleteItem(id)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
