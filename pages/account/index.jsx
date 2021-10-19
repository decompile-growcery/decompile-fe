import Navbar from "../../components/navbar";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import useUser from "../../lib/hooks/useUser";
import styles from "../../styles/pages/Account.module.scss";

export default function Account() {
  const userToken = useUser();
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}user`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data.data[0]));
  }, []);
  console.log(user);
  return (
    <div>
      <Head>
        <title> Growcery | Account Page </title>
        <meta name="description" content="My Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.account}>
        <h1>Profile</h1>
        <div className={styles.account_field}>
          <p className={styles.account_field_key}>Username</p>
          <p className={styles.account_field_value}>{user.username}</p>
        </div>
        <div className={styles.account_field}>
          <p className={styles.account_field_key}>Email</p>
          <p className={styles.account_field_value}>{user.email}</p>
        </div>
        <div className={styles.account_field}>
          <p className={styles.account_field_key}>First Name</p>
          <p className={styles.account_field_value}>{user.first_name}</p>
        </div>
        <div className={styles.account_field}>
          <p className={styles.account_field_key}>Last Name</p>
          <p className={styles.account_field_value}>{user.last_name}</p>
        </div>
        <div className={styles.account_field}>
          <p className={styles.account_field_key}>Address</p>
          <p className={styles.account_field_value}>
            {user.street_address}, {user.postal_code}, {user.city}, {user.state}
          </p>
        </div>
        <Link href="/account/edit">
          <a className={styles.account_button}>Edit Profile</a>
        </Link>
      </main>
    </div>
  );
}
