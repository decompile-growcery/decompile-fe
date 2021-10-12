import ProductCard from './productCard'
import styles from '../styles/components/ProductList.module.scss'
import { Grid } from '@material-ui/core'

export default function productList({products}){
    const productCards = products.map( (p, i) => 
        <ProductCard 
            key= {i}
            id={p.product_id}
            name={p.product_name}
            unitWeight={p.unit_weight}
            unitName={p.unit_name}
            image={p.image}
            price={p.product_price}
        />
    )
    return (
        <div>
            <Grid container className={styles.productList}>
                {productCards}
            </Grid>
        </div>
    )
}