import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from "../styles/components/FarmerBreadcrumbs.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: "'Poppins', sans-serif !important",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));

export default function FarmerBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <p>Farmer&apos;s Dashboard</p>
          <p>Orders</p>
          <p className={styles.farmerBreadcrumbs_bcText}>My Orders</p>
      </Breadcrumbs>
    </div>
  );
}
