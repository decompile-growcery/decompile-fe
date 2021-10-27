import Navbar from "../../components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import postData from "../../lib/utils/postData";
import useUser from "../../lib/hooks/useUser";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/pages/EditAccount.module.scss";

export default function Address() {
  const userToken = useUser();
  const router = useRouter();

  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");

  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}user`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let temp = data.data[0];

        setStreetName(temp.street_address);
        setCityName(temp.city);

        setStateName(temp.state);
        setPostalCode(temp.postal_code);
      });
  }, []);

  const handleUpdate = async () => {
    const data = new URLSearchParams({
      state: stateName,
      city: cityName,
      postal_code: postalCode,
      street_address: streetName
    });
    console.log(data)
    const [isError, response] = await postData(data, "address", userToken, false, false);
    console.log(response)
    if (isError) {
      toast.error("Add address failed, please try again");
    } else {
      toast.success("Add address success, redirecting...");
      router.back();
    }
  };

  return (
    <div>
      <Head>
        <title> Growcery | Account Page </title>
        <meta name="description" content="My Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.editAccount}>
        <ToastContainer />
        <h1>Add Address</h1>
        <div className={styles.editAccount_fields}>
          <div className={styles.editAccount_input}>
            <label>Street Name</label>
            <input
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </div>
          <div className={styles.editAccount_input}>
            <label>City</label>
            <input
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </div>
          <div className={styles.editAccount_input}>
            <label>State</label>
            <input
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
          </div>
          <div className={styles.editAccount_input}>
            <label>Postal Code</label>
            <input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>
        <button
          className={`${styles.editAccount_btn_update} ${styles.editAccount_btn}`}
          onClick={handleUpdate}
        >
          Add Address
        </button>
        <Link href="/account">
          <button
            className={`${styles.editAccount_btn_cancel} ${styles.editAccount_btn}`}
          >
            Cancel
          </button>
        </Link>
      </main>
    </div>
  );
}
