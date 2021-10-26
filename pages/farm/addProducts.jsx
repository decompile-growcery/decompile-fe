import { useState } from "react";
import Head from "next/head";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/AddProduct.module.scss";
import FarmerNavbar from "../../components/farmNavbar";
import FarmerBreadcrumbs from "../../components/farmerBreadcrumbs";
import ResponsiveDrawer from "../../components/farmerSideBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import useForm from "../../lib/hooks/useForm";
import plus from "../../public/plus.png";
import Image from "next/image";
import Link from "next/link";
import postFormData from "../../lib/utils/postFormData";
import "react-toastify/dist/ReactToastify.css";

export default function FarmerProduct() {
  const router = useRouter();
  const user = useUser();

  const handleCreate = async (e) => {
    e.preventDefault();

    const body = new FormData();

    body.append("category_id", category_id);
    body.append("product_name", product_name);
    body.append("product_desc", product_desc);
    body.append("product_price", product_price);
    body.append("product_image", image);
    body.append("unit_weight", unit_weight);
    body.append("unit_name", unit_name);
    body.append("stock", stock);
    body.append("is_fresh", is_fresh);

    const [isError, response] = await postFormData(body, "product", user);
    if (isError) toast.error("Create product failed, please try again");
    else {
      toast.success("Successfully created product, redirecting...");
      router.push("/farm/farmerProducts");
    }
  };

  const upLoadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
    }
  };
  const [image, setImage] = useState(null);

  const [category_id, setCategoryId] = useState("1");
  const [is_fresh, setIsFresh] = useState("true");

  const [product_name, handleChangeProductName] = useForm("");
  const [product_desc, handleChangeProductDesc] = useForm("");
  const [product_price, handleChangePrice] = useForm("");
  const [unit_weight, handleChangeWeight] = useForm("");
  const [unit_name, handleChangeUnitName] = useForm("");
  const [stock, handleChangeStock] = useForm("");
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
        <FarmerBreadcrumbs string2="Products" string3="Add Products" />
        <div className={styles.addProducts_productInformationContainer}>
          <form id="createProductForm" onSubmit={handleCreate}>
            <h1>Basic Information</h1>
            <div
              className={
                styles.addProducts_productInformationContainer_productName
              }
            >
              <label>Product Name*</label>
              <input
                value={product_name}
                onChange={handleChangeProductName}
                placeholder="0/100  "
              />
            </div>
            <div
              className={
                styles.addProducts_productInformationContainer_productDesc
              }
            >
              <label>Product Description*</label>
              <textarea
                value={product_desc}
                onChange={handleChangeProductDesc}
                placeholder="0/3000 "
                rows="12"
              />
            </div>
            <div
              className={
                styles.addProducts_productInformationContainer_productCategory
              }
            >
              <label>Product Category*</label>
              <select
                value={category_id}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
              >
                <option value="1">Fruit</option>
                <option value="2">Vegetables</option>
                <option value="3">Dairy</option>
                <option value="4">Meat</option>
                <option value="5">Grains</option>
                <option value="6">Others</option>
              </select>
            </div>
            <h1>Media Management</h1>
            <div
              className={
                styles.addProducts_productInformationContainer_uploadImage
              }
            >
              <label>Product Images*</label>
              <div
                className={
                  styles.addProducts_productInformationContainer_uploadImage_imagePreview
                }
              >
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  name="myImage"
                  onChange={upLoadToClient}
                ></input>
                <label htmlFor="file">
                  <Image src={plus} alt="addImg" width="30%" height="30%" />
                </label>
              </div>
            </div>

            <h1>Sales Information</h1>

            <div
              className={
                styles.addProducts_productInformationContainer_salesInformation
              }
            >
              <label>Unit Price*</label>
              <input
                value={product_price}
                onChange={handleChangePrice}
                placeholder="$"
              />
              <label>Unit Weight*</label>
              <input
                value={unit_weight}
                onChange={handleChangeWeight}
                placeholder=""
              />
              <label>Unit Name*</label>
              <input
                value={unit_name}
                onChange={handleChangeUnitName}
                placeholder=""
              />
            </div>

            <div
              className={styles.addProducts_productInformationContainer_stock}
            >
              <label>Stock*</label>
              <input value={stock} onChange={handleChangeStock} />
            </div>

            <div
              className={styles.addProducts_productInformationContainer_isFresh}
            >
              <label>Is Fresh*</label>
              <select
                value={is_fresh}
                onChange={(e) => {
                  setIsFresh(e.target.value);
                }}
              >
                <option value="true" onChange={setIsFresh}>
                  true
                </option>
                <option value="false" onChange={setIsFresh}>
                  false
                </option>
              </select>
            </div>

            <h1>Shipping Information</h1>

            <div
              className={
                styles.addProducts_productInformationContainer_shippingInformation
              }
            >
              <label>Self Pick Up Address</label>
              <div
                className={
                  styles.addProducts_productInformationContainer_shippingInformation_address
                }
              >
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
            <div
              className={
                styles.addProducts_productInformationContainer_availability
              }
            >
              <label>Delivery Availablity</label>
              <input
                value={availablity}
                onChange={handleChangeAvailablity}
                placeholder="Availablity"
              />
            </div>
            <div
              className={styles.addProducts_productInformationContainer_endBtn}
            >
              <button
                className={
                  styles.addProducts_productInformationContainer_endBtn_cancelBtn
                }
              >
                <Link href="/farm/farmerProducts">
                  <a>Cancel</a>
                </Link>
              </button>
              <button
                type="submit"
                form="createProductForm"
                className={
                  styles.addProducts_productInformationContainer_endBtn_submitBtn
                }
              >
                Save and Publish
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}category`);
  let data = "";
  if (res) {
    data = await res.json();
  }
  return {
    props: {
      products: data.data || "",
    },
  };
}
