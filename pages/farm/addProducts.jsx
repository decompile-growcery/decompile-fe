import { useEffect, useState } from "react";
import Head from "next/head";
import FarmerProductItem from "../../components/farmerProductItem";
import useUser from "../../lib/hooks/useUser";
// import styles from "../../styles/pages/Order.module.scss";
import styles from "../../styles/pages/AddProduct.module.scss"
import FarmerNavbar from "../../components/farmNavbar";
import FarmerBreadcrumbs from "../../components/farmerBreadcrumbs";
import ResponsiveDrawer from "../../components/farmerSideBar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import useForm from "../../lib/hooks/useForm";
import plus from "../../public/plus.png"
import Image from "next/image";


export default function farmerProduct() {

    const user = useUser();
    const router = useRouter();

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

    console.log(productList);
    console.log(filteredList)

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

    const [product_name, handleChangeProductName] = useForm("");
    const [product_desc, handleChangeProductDesc] = useForm("");
    const [category_id, handleChangeCategory] = useForm("");
    const [image, handleChangeImage] = useForm("");
    const [product_price, handleChangePrice] = useForm("");
    const [unit_weight, handleChangeWeight] = useForm("");
    const [unit_name, handleChangeUnitName] = useForm("");
    const [country, handleChangeCountry] = useForm("");
    const [city, handleChangeCity] = useForm("");
    const [postalCode, handleChangePostCode] = useForm("");
    const [addressLine1, handleChangeAddressLine1] = useForm("");
    const [addressLine2, handleChangeAddressLine2] = useForm("");
    const [availablity, handleChangeAvailablity] = useForm("");



    return (
        <div>
            <Head>
                <title>Farm Products | Growcery</title>
            </Head>
            <FarmerNavbar />
            <ResponsiveDrawer />
            <main className={styles.addProducts}>
                <ToastContainer />
                <FarmerBreadcrumbs />
                <div className={styles.addProducts_productInformationContainer}>
                    <form>

                        <h1>Basic Information</h1>
                        <div className={styles.addProducts_productInformationContainer_productName}>
                            <label>Product Name*</label>
                            <input
                                value={product_name}
                                onChange={handleChangeProductName}
                                placeholder="0/100  "
                            />
                        </div>
                        <div className={styles.addProducts_productInformationContainer_productDesc}>
                            <label>Product Description*</label>
                            <textarea
                                value={product_desc}
                                onChange={handleChangeProductDesc}
                                placeholder="0/3000 "
                                rows="12"
                            />
                        </div>
                        <div className={styles.addProducts_productInformationContainer_productCategory}>
                            <label>Product Category*</label>
                            <select>
                                <option value={category_id} onChange={handleChangeCategory}>1</option>
                                <option value={category_id} onChange={handleChangeCategory}>2</option>
                                <option value={category_id} onChange={handleChangeCategory}>3</option>
                            </select>
                        </div>
                        <h1>Media Management</h1>
                        <div className={styles.addProducts_productInformationContainer_uploadImage}>
                            <label>Product Images*</label>
                            <div className={styles.addProducts_productInformationContainer_uploadImage_imagePreview}>
                                <input type="file" id="file" accept="image/*" value={image} onChange={handleChangeImage}></input>
                                <label for="file">
                                    <Image src={plus} alt="addImg" width="30%" height="30%" />
                                </label>
                            </div>
                            <div className={styles.addProducts_productInformationContainer_uploadImage_imagePreview}>
                                <input type="file" id="file" accept="image/*" value={image} onChange={handleChangeImage}></input>
                                <label for="file">
                                    <Image src={plus} alt="addImg" width="30%" height="30%" />
                                </label>
                            </div>
                            <div className={styles.addProducts_productInformationContainer_uploadImage_imagePreview}>
                                <input type="file" id="file" accept="image/*" value={image} onChange={handleChangeImage}></input>
                                <label for="file">
                                    <Image src={plus} alt="addImg" width="30%" height="30%" />
                                </label>
                            </div>
                        </div>

                        <h1>Sales Information</h1>

                        <div className={styles.addProducts_productInformationContainer_salesInformation}>

                            <label>Unit Price*</label>
                            <input
                                value={product_price}
                                onChange={handleChangePrice}
                                placeholder="$"
                            />
                            <label>Unit Weight</label>
                            <input
                                value={unit_weight}
                                onChange={handleChangeWeight}
                                placeholder=""
                            />
                            <label>Unit Name</label>
                            <input
                                value={unit_name}
                                onChange={handleChangeUnitName}
                                placeholder=""
                            />
                        </div>

                        <h1>Shipping Information</h1>

                        <div className={styles.addProducts_productInformationContainer_shippingInformation}>

                            <label>Self Pick Up Address</label>
                            <div className={styles.addProducts_productInformationContainer_shippingInformation_address}>
                                <input
                                    value={country}
                                    onChange={handleChangeCountry}
                                    placeholder="Country"
                                />

                                <input
                                    value={addressLine1}
                                    onChange={handleChangeAddressLine1}
                                    placeholder="Address Line 1"
                                />

                                <input
                                    value={city}
                                    onChange={handleChangeCity}
                                    placeholder="State/City"
                                />

                                <input
                                    value={addressLine2}
                                    onChange={handleChangeAddressLine2}
                                    placeholder="Address Line 2"
                                />

                                <input
                                    value={postalCode}
                                    onChange={handleChangePostCode}
                                    placeholder="Postal Code"
                                />
                            </div>
                            

                        </div>
                        <div className={styles.addProducts_productInformationContainer_availability}>
                        <label>Delivery Availablity</label>
                            <input
                                    value={availablity}
                                    onChange={handleChangeAvailablity}
                                    placeholder="Availablity"
                                />
                        </div>

                    </form>

                </div>
                <script>
                    const inpFile = document
                </script>
            </main>
        </div>
    );
}