import {
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircleOutlined, HomeOutlined } from "@material-ui/icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/components/FarmerNavbar.module.scss";
import useUser from "../lib/hooks/useUser";
import Cookies from "js-cookie";

export default function FarmerNavbar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const user = useUser();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <nav>
      <AppBar
        className={styles.farmerNavbar}
        color="transparent"
        position="static"
      >
        <Toolbar>
          <p className={styles.farmerNavbar_seller}>
            Farmer{`'`}s Seller Center
          </p>
          <div className={styles.farmerNavbar_items}>
            <Link href="/">
              <a> Home </a>
            </Link>
            <IconButton onClick={handleClick}>
              <AccountCircleOutlined />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className={styles.navbar_dropdown}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!user ? (
          <>
            <Link href="/login">
              <MenuItem>Login</MenuItem>
            </Link>
            <Link href="/register">
              <MenuItem>Register</MenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link href="/account">
              <MenuItem>My Account</MenuItem>
            </Link>
            <Link href="/farm/orders">
              <MenuItem>My Farm</MenuItem>
            </Link>
            <MenuItem
              onClick={handleLogout}
              className={styles.farmerNavbar_logout}
            >
              Logout
            </MenuItem>
          </>
        )}
      </Menu>
      <BottomNavigation className={styles.farmerNavbar_mobile}>
        <Link href="/">
          <BottomNavigationAction icon={<HomeOutlined />} />
        </Link>
        <BottomNavigationAction
          onClick={handleClick}
          icon={<AccountCircleOutlined />}
        />
      </BottomNavigation>
    </nav>
  );
}
