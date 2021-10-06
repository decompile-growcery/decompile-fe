import {
    AppBar,
    Toolbar,
    IconButton,
    BottomNavigation,
    BottomNavigationAction,
  } from "@material-ui/core";
  import {
    AccountCircleOutlined,
    HomeOutlined,
  } from "@material-ui/icons";
  import Link from "next/link";
  import Image from "next/image";
  import logo from "../public/logo.png";
  import styles from "../styles/components/FarmerNavbar.module.scss";
  import useUser from "../lib/hooks/useUser";
  
  export default function FarmerNavbar() {
    const user = useUser();
    return (
      <nav>
        <AppBar className={styles.farmerNavbar} color="transparent" position="static">
          <Toolbar>
            <span className={styles.farmerNavbar_logo}>
              <Image src={logo} alt="logo" />
            </span>
            <p className={styles.farmerNavbar_seller}>Farmer{`'`}s Seller Center</p>
            <div className={styles.farmerNavbar_items}>
              <Link href="/">
                <a> Home </a>
              </Link>
              <Link href={user ? "/account" : "/login"}>
                <IconButton>
                  <AccountCircleOutlined />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
  
        <BottomNavigation className={styles.farmerNavbar_mobile}>
          <Link href="/">
            <BottomNavigationAction icon={<HomeOutlined />} />
          </Link>
          <Link href={user ? "/account" : "/login"}>
            <BottomNavigationAction icon={<AccountCircleOutlined />} />
          </Link>
        </BottomNavigation>
      </nav>
    );
  }
  