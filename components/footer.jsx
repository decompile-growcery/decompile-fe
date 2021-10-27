import { Grid } from "@material-ui/core";
import Image from "next/image";
import Logo from "../public/whitelogo.svg";
import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <Grid container className={styles.footer}>
      <Grid item className={styles.footer_one} xs={4}>
      <Image className={styles.footer_image} src={Logo} alt="Logo" width={350} />
      </Grid>
      <Grid item xs={4}>
          <div className={styles.footer_two}>
            <p className={styles.footer_copyright}>Copyright © growcery 2021</p>
          </div>
      </Grid>
      <Grid item xs={4}>
        <p className={styles.footer_contact}>Contact us</p>
        <a className={styles.footer_email} href="mailto: growcerydecompile@gmail.com">growcerydecompile@gmail.com</a>
      </Grid>
    </Grid>
  );
}
