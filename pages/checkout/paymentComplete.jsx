import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import styles from "../../styles/pages/Checkout.module.scss";
import paypal from "../../public/paypal.png";

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Checkout | Growcery</title>
      </Head>
      <Navbar />
      <main className={styles.checkout}>
        <div className={styles.checkout_container}>
			<div>
				<h1>
					Thank you, your payment has been processed.
				</h1>

				<Image src={paypal} />

			</div>
			<hr/>
			<div>
				<button className={styles.checkout_float_button}>
					Go back to Homepage
				</button>
			</div>
        </div>
      </main>
    </div>
  );
}
