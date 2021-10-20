import Image from "next/image";
import styles from "../styles/components/FarmerProductItem.module.scss";
import useUser from "../lib/hooks/useUser";
import Link from "next/link";

export default function farmerProductItem({
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
  image
  // categoryId,
  // productName,
  // productDesc,
  // productPrice,
  // unitWeight,
  // unitName,
  // stock,
  // isFresh,
  // farmAddress,
  // imageId,
  // productImage,
  // productId,
  // farmName,
  // productDiscount
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
          <p className={styles.farmerProductItem_desc}>Product ID: {product_id}</p>
        </div>

      </div>

      <div className={styles.farmerProductItem_stock}>
        {/* <p className={styles.farmerProductItem_descTitle}>Stock:</p> */}
        <p className={styles.farmerProductItem_desc}>{stock}</p>
      </div>

      {/* <div>
        <p className={styles.farmerProductItem_descTitle}>Weight:</p>
        <p className={styles.farmerProductItem_desc}>{weight}kg</p>
        </div>  */}

      <div className={styles.farmerProductItem_price}>
        {/* <p className={styles.farmerProductItem_descTitle}>$</p> */}
        <p className={styles.farmerProductItem_desc}>${product_price}</p>
        <p className={styles.farmerProductItem_desc}>/{unit_weight}{unit_name}</p>
      </div>

      {/* <div>
        <p className={styles.farmerProductItem_descTitle}>Price:</p>
        <p className={styles.farmerProductItem_desc}>${price}</p>
        </div>  */}

      <div className={styles.farmerProductItem_shipping}>
        <p className={styles.farmerProductItem_descTitle}>Self-pickup only</p>
        {/* <p className={styles.farmerProductItem_desc}>{is_delivery? "Delivery":"Pick Up"}</p> */}
      </div>

      {/* <div>
        <p className={styles.farmerProductItem_descTitle}>Recipient:</p>
        <p className={styles.farmerProductItem_desc}>{first_name} {last_name}</p>
        </div> 
        
        <div>
        <p className={styles.farmerProductItem_descTitle}>Delivery Address:</p>
        <p className={styles.farmerProductItem_desc}>{is_delivery? `${street_address}, ${state}, ${city} ${postal_code}` :"-"}</p>
        </div>  */}

      <div>
        <Link href={`/farm/edit/${product_id}`}>
          Edit
        </Link>
      </div>
    </div>
  );
}
