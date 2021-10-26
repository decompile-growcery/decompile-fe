import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styles from "../styles/components/farmerSideBar.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={styles.sidebar_item}>
      <div />
      <span className={styles.sidebar_logo}>
        <Image src={logo} alt="logo" width={200}/>
      </span>
      <h3 className={styles.sidebar_title}>Products</h3>
      <List className={styles.sidebar_list}>
        <ListItem button key={"my-products"}>
          <Link href="/farm/farmerProducts">
            <ListItemText
              classes={{ primary: styles.sidebar_listItem }}
              primary={"My Products"}
            />
          </Link>
        </ListItem>
        <ListItem button key={"add-product"}>
          <Link href="/farm/addProducts">
            <ListItemText
              classes={{ primary: styles.sidebar_listItem }}
              primary={"Add Product"}
            />
          </Link>
        </ListItem>
      </List>

      <h3 className={styles.sidebar_title}>Orders</h3>
      <List>
        <ListItem button key={"my-orders"}>
          <Link href="/farm/orders">
            <ListItemText
              classes={{ primary: styles.sidebar_listItem }}
              primary={"My Orders"}
            />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
