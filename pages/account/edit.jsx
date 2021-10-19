import Navbar from "../../components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import putData from "../../lib/utils/putData";
import useUser from "../../lib/hooks/useUser";
import { useRouter } from "next/dist/client/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/pages/EditAccount.module.scss";

export default function Account() {
  const userToken = useUser();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");

  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}user`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let temp = data.data[0];
        setUser(data.data[0]);

        setFirstName(temp.first_name);
        setLastName(temp.last_name);

        setStreetName(temp.street_address);
        setCityName(temp.city);
        
        setStateName(temp.state);
        setPostalCode(temp.postal_code);
      });
  }, []);

  const handleUpdate = async () => {
    const data = new URLSearchParams({
      first_name: firstName,
      last_name: lastName,
      state: stateName,
      city: cityName,
      postal_code: postalCode,
      street_address: streetName,
      address_id: user.address_id,
    });
    const [isError, response] = await putData(data, "user", userToken);

    if (isError) {
      toast.error("Update failed, please try again");
    } else {
      toast.success("Update success, redirecting...");
      router.push("/account");
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
        <h1>Edit Profile</h1>
        <div className={styles.editAccount_fields}>
          <div className={styles.editAccount_input}>
            <label>Username</label>
            <input disabled value={user ? user.username : ""} />
          </div>
          <div className={styles.editAccount_input}>
            <label>Email</label>
            <input disabled value={user ? user.email : ""} />
          </div>
          <div className={styles.editAccount_input}>
            <label>First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.editAccount_input}>
            <label>Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
          Update
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
