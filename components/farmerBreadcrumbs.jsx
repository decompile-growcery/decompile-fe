import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from "../styles/components/farmerBreadcrumbs.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: "'Poppins', sans-serif !important",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));

export default function FarmerBreadcrumbs({string2, string3}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <p className={styles.farmerBreadcrumbs_bcText}>Farmer&#39;s Dashboard</p>
          <p className={styles.farmerBreadcrumbs_bcText}>{string2}</p>
          <p className={styles.farmerBreadcrumbs_bcTextBold}>{string3}</p>
      </Breadcrumbs>
    </div>
  );
}
