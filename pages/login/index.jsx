import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";
import { IconButton, Typography } from "@material-ui/core";
import logo from "../../public/logo.png";
import styles from "../../styles/pages/Login.module.scss";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.login_root}>
      <Head>
        <title>Growcery | Login to Your Account </title>
        <meta
          name="description"
          content="Shop directly from farmers | Growcery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.login}>
        <div className={styles.login_backButton}>
          <Link href="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <form className={styles.login_form} onSubmit={handleLogin}>
          <p className={styles.login_form_title}>Login</p>
          <label>Username</label>
          <input placeholder="e.g. John Doe"/>
          <label>Password</label>
          <input type="password" placeholder="min. 8 characters"/>
          <div className={styles.login_form_forgotPassword}>
            <Link href="/forgot-password">
              <a>I forgot my password</a>
            </Link>
          </div>
          <button className={styles.login_form_submitBtn}>login</button>
          <div className={styles.login_form_registerPrompt}>
            <p>Don't have an account?</p>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
