import { useEffect, useState } from "react";
import Head from "next/head";
import FarmerProductItem from "../../components/farmerProductItem";
import useUser from "../../lib/hooks/useUser";
// import styles from "../../styles/pages/Order.module.scss";
import styles from "../../styles/pages/FarmerProduct.module.scss"
import FarmerNavbar from "../../components/farmNavbar";
import FarmerBreadcrumbs from "../../components/farmerBreadcrumbs";
import ResponsiveDrawer from "../../components/farmerSideBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";


export default function FarmerProduct() {


    const user = useUser();
    // const [filteredList, setFiltered] = useState([]);

    const [productList, setProducts] = useState([]);
    const [filteredList, setFiltered] = useState([]);

    useEffect(() => {
        // 
        fetch(`${process.env.NEXT_PUBLIC_API_LINK}products?user_id=${user}`, {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.data);
                setFiltered(productList);
                mapProducts();
            });
    }, []);
    // setFiltered(productList);
    console.log(productList);
    console.log(filteredList)

    // const filterProducts = (id) => {
    //     const newProducts = productList.filter((d) => d.status_id === id);
    //     setFiltered(newProducts);
    //     mapProducts();
    // };

    // const getAllProducts = () => {
    //     setFiltered(productList);
    // };
    let products = productList.map((c, i) => (
        <FarmerProductItem
            key={i}
            image={c.image}
            product_id={c.product_id}
            farm_id={c.farm_id}
            farm_name={c.farm_name}
            farm_address={c.farm_address}
            product_name={c.product_name}
            product_desc={c.product_desc}
            product_price={c.product_price}
            unit_weight={c.unit_weight}
            unit_name={c.unit_name}
            stock={c.stock}
            is_fresh={c.is_fresh}
            discount={c.discount}
            image_id={c.image_id}
        />
    ));
    console.log(products);

    const mapProducts = () => {
        products = [];
        products = productList.map((c, i) => (
            <FarmerProductItem
                key={i}
                image={c.image}
                product_id={c.product_id}
                farm_id={c.farm_id}
                farm_name={c.farm_name}
                farm_address={c.farm_address}
                product_name={c.product_name}
                product_desc={c.product_desc}
                product_price={c.product_price}
                unit_weight={c.unit_weight}
                unit_name={c.unit_name}
                stock={c.stock}
                is_fresh={c.is_fresh}
                discount={c.discount}
                image_id={c.image_id}
            />
        ));
    };

    const CustomButton = withStyles({
        root: {
            fontFamily: "'Poppins', sans-serif !important",
        },
        label: {
            textTransform: "capitalize",
        },
    })((props) => <Button {...props} />);

    return (
        <div>
            <Head>
                <title>Farm Products | Growcery</title>
            </Head>
            <FarmerNavbar />
            <ResponsiveDrawer />
            <main className={styles.products}>
                <FarmerBreadcrumbs />
                <div className={styles.products_addProductContainer}>
                    <h1>25 Products</h1>
                    <a href="./addProducts">
						<button className={styles.products_addProductContainer_addProductButton}>
							+ Add New Product
						</button>
					</a>
                </div>
                <div className={styles.products_container}>
                    <Grid container>
                        <Grid item xs={8}>
                            <div className={styles.products_statusButtons}>
                                <ButtonGroup
                                    variant="text"
                                    aria-label="text primary button group"
                                >
                                    <CustomButton >
                                        All
                                    </CustomButton>
                                    <CustomButton >
                                        Listed
                                    </CustomButton>
                                    <CustomButton >
                                        Unlisted
                                    </CustomButton>
                                </ButtonGroup>
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <p className={styles.products_countOrder}>
                                {productList.length} Products(s)
                            </p>

                        </Grid>

                    </Grid>

                    <hr className={styles.products_titleLine} />

                    <div className={styles.products_productTitles}>
                        <p className={styles.products_productTitles_product}>Product</p>
                        <p className={styles.products_productTitles_stock}>Stock</p>
                        <p className={styles.products_productTitles_unitPrice}>Unit Price</p>
                        <p className={styles.products_productTitles_shipping}>Shipping</p>
                        <p className={styles.products_productTitles_options}>Options</p>
                    </div>
                    <hr className={styles.products_line} />
                    {products}
                </div>
            </main>
        </div>
    );
}