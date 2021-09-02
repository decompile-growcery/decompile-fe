import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import logo from "../../public/logo.png";
import styles from "../../styles/pages/Register.module.scss";
import useForm from "../../lib/hooks/useForm";
import postData from "../../lib/utils/postData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/dist/client/router";
import { AuthContext } from "../../lib/contexts/AuthProvider";
import { useContext } from "react";

export default function Register() {
  const router = useRouter(); //
  const { setUser } = useContext(AuthContext);//

  const handleRegister = async (e) => { //
    e.preventDefault();

    if (confirmedPassword !== password) {
      toast.error("Password does not match.")
    } else if (password.length <= 8) {
      toast.error("Password needs to be more than 8 characters")
    } else {
      const data = new URLSearchParams({
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name,
      })
      const [isError, response] = await postData(data, "auth/register");
      if (isError) toast.error("Register failed, please try again"); //?//
      else { // 
        toast.success("Register success, redirecting...");
        setUser(response.token);
        router.push("/"); //
      }
      // toast.success("Register success, redirecting...")
    };

  };
  const [first_name, handleChangeFirstName] = useForm("");
  const [last_name, handleChangeLastName] = useForm("");
  const [username, handleChangeUsername] = useForm("");
  const [password, handleChangePassword] = useForm("");
  const [email, handleChangeEmailaddress] = useForm("");
  const [confirmedPassword, handleChangeConfirmedPassword] = useForm("");

  return (
    <div className={styles.register_root}>
      <Head>
        <title>Growcery | Register Your Account </title>
        <meta
          name="description"
          content="Shop directly from farmers | Growcery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.register}>
        <ToastContainer />
        <div className={styles.register_backButton}>
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
        <form className={styles.register_form} onSubmit={handleRegister}>
          <p className={styles.register_form_title}>Register</p>
          <label>First Name</label>
          <input
            value={first_name}
            onChange={handleChangeFirstName}
            placeholder="e.g. John"
          />
          <label>Last Name</label>
          <input
            value={last_name}
            onChange={handleChangeLastName}
            placeholder="e.g. Doe"
          />
          <label>Email address</label>
          <input
            value={email}
            onChange={handleChangeEmailaddress}
            type="email"
            placeholder="e.g. johndoe@email.com"
          />
          <label>Username</label>
          <input
            value={username}
            onChange={handleChangeUsername}
            placeholder="e.g. johndoe"
          />
          <label>Password</label>
          <input
            value={password}
            onChange={handleChangePassword}
            type="password"
            placeholder="min. 8 characters"
          />
          <label>Confirm Password</label>
          <input
            value={confirmedPassword}
            onChange={handleChangeConfirmedPassword}
            type="password"
            placeholder="min. 8 characters"
          />
          <button className={styles.register_form_submitBtn}>Register</button>
          <div className={styles.register_form_registerPrompt}>
            <p>Already have an account?</p>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
