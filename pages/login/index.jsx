import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import logo from "../../public/logo.png";
import styles from "../../styles/pages/Login.module.scss";
import useForm from "../../lib/hooks/useForm";
import postData from "../../lib/utils/postData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/dist/client/router";
import { AuthContext } from "../../lib/contexts/AuthProvider";
import { useContext } from "react";

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams({
      login: username,
      password: password,
    });

    const [isError, response] = await postData(data, "auth/login");

    if (isError) toast.error("Login failed, please try again");
    else {
      toast.success("Login success, redirecting...");
      setUser(response.token);
      router.push("/");
    }
  };

  const [username, handleChangeUsername] = useForm("");
  const [password, handleChangePassword] = useForm("");

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
        <ToastContainer />
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
          <label>Username/Email</label>
          <input
            value={username}
            onChange={handleChangeUsername}
            placeholder="e.g. John Doe"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            placeholder="min. 8 characters"
          />
          <div className={styles.login_form_forgotPassword}>
            <Link href="/forgot-password">
              <a>I forgot my password</a>
            </Link>
          </div>
          <button className={styles.login_form_submitBtn}>login</button>
          <div className={styles.login_form_registerPrompt}>
            <p>Don&apos;t have an account?</p>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
