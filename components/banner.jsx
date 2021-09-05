import { Grid } from '@material-ui/core'
import Image from 'next/image';
import banner from '../public/banner.png'
import styles from '../styles/components/Banner.module.scss'

export default function Banner() {
  return (
    <Grid container className={styles.banner}>
      <Grid item xs={12} md={3} className={styles.banner_text}>
        <h1>Eat more.</h1>
        <h1>Waste Less.</h1>
      </Grid>
      <Grid item xs={12} md={9}>
        <Image className={styles.banner_image} src={banner} />
      </Grid>
    </Grid>
  );
}
