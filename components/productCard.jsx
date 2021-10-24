import Image from "next/image";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import styles from "../styles/components/ProductCard.module.scss";

export default function productCard({
  id,
  name,
  unitWeight,
  unitName,
  image,
  price,
}) {
  return (
    <Grid className={styles.productCard_container} item md={3} sm={12}>
      <div className={styles.productCard_content}>
        <div className={styles.productCard_image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_LINK}static/${image}`}
            alt={`${name} image`}
            width={200}
            height={200}
          />
        </div>
        <h4 className={styles.productCard_name}>{name}</h4>
        <h4 className={styles.productCard_price}>
          ${price}
          <span className={styles.productCard_weight}>
            /{unitWeight} {unitName}
          </span>
        </h4>
        <Link href={`/product/${id}`}>
          <button className={styles.productCard_btn}>View Product</button>
        </Link>
      </div>
    </Grid>
  );
}
