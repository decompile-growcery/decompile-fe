import {
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
  HomeOutlined,
  HistoryOutlined,
} from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/components/Navbar.module.scss";
import useUser from "../lib/hooks/useUser";
import searchResult from "./searchResult";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const user = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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

  const [searchWord, setSearchWord] = useState("");

  const handleFilter = (event) => {
    setSearchWord(event.target.value);
  };

  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };

  const searchSubmit = preventDefault(() => {
    router.push({
      pathname: `/search/${searchWord}`,
    });
  });

  return (
    <nav>
      <AppBar className={styles.navbar} color="transparent" position="static">
        <Toolbar>
          <Link href="/">
            <span className={styles.navbar_logo}>
              <Image src={logo} alt="logo" />
            </span>
          </Link>
          <form onSubmit={searchSubmit}>
            <span className={styles.navbar_searchbar_icon} />
            <input
              className={styles.navbar_searchbar}
              placeholder="Search your favourite vegies here..."
              onChange={handleFilter}
            />
          </form>
          <div className={styles.navbar_items}>
            <Link href="/">Home</Link>
            {user && (
              <>
                <Link href="/history">
                  <a> History </a>
                </Link>
                <Link href="/cart">
                  <IconButton>
                    <ShoppingCartOutlined />
                  </IconButton>
                </Link>
              </>
            )}
            <IconButton onClick={handleClick}>
              <AccountCircleOutlined />
            </IconButton>
          </div>
          {user && (
            <Link href="/cart">
              <div className={styles.navbar_shoppingCart}>
                <IconButton>
                  <ShoppingCartOutlined />
                </IconButton>
              </div>
            </Link>
          )}
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
            <Link href="/farm/farmerProducts">
              <MenuItem>My Farm</MenuItem>
            </Link>
            <MenuItem onClick={handleLogout} className={styles.navbar_logout}>
              Logout
            </MenuItem>
          </>
        )}
      </Menu>

      <BottomNavigation className={styles.navbar_mobile}>
        <Link href="/">
          <BottomNavigationAction icon={<HomeOutlined />} />
        </Link>
        {user && <BottomNavigationAction icon={<HistoryOutlined />} />}
        <Link href={user ? "/account" : "/login"}>
          <BottomNavigationAction icon={<AccountCircleOutlined />} />
        </Link>
      </BottomNavigation>
    </nav>
  );
}
