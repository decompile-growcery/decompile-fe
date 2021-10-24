import Image from "next/image";
import styles from "../styles/components/FarmerProductItem.module.scss";
import useUser from "../lib/hooks/useUser";
import Link from "next/link";

export default function FarmerProductItem({
  key,
  product_id,
  farm_id,
  farm_name,
  farm_address,
  product_name,
  product_desc,
  product_price,
  unit_weight,
  unit_name,
  stock,
  is_fresh,
  discount,
  image_id,
  image,
}) {
  const user = useUser();

  return (
    <div className={styles.farmerProductItem}>
      <div className={styles.farmerProductItem_imageAndTitles}>
        <div>
          <Image
            className={styles.farmerProductItem_image}
            src={`${process.env.NEXT_PUBLIC_API_LINK}static/${image}`}
            width={128}
            height={128}
          />
        </div>

        <div>
          <p className={styles.farmerProductItem_name}>{product_name}</p>
          <p className={styles.farmerProductItem_desc}>
            Product ID: {product_id}
          </p>
        </div>
      </div>

      <div className={styles.farmerProductItem_stock}>
        <p className={styles.farmerProductItem_desc}>{stock}</p>
      </div>

      <div className={styles.farmerProductItem_price}>
        <p className={styles.farmerProductItem_desc}>${product_price}</p>
        <p className={styles.farmerProductItem_desc}>
          /{unit_weight}
          {unit_name}
        </p>
      </div>

      <div className={styles.farmerProductItem_shipping}>
        <p className={styles.farmerProductItem_descTitle}>Self-pickup only</p>
      </div>
    </div>
  );
}
