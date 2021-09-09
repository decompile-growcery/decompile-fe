import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
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

export default function Navbar() {
  const user = useUser();
  return (
    <nav>
      <AppBar className={styles.navbar} color="transparent" position="static">
        <Toolbar>
          <span className={styles.navbar_logo}>
            <Image src={logo} alt="logo" />
          </span>
          <div>
            <span className={styles.navbar_searchbar_icon} />
            <input
              className={styles.navbar_searchbar}
              placeholder="Search your favourite vegies here..."
            />
          </div>
          <div className={styles.navbar_items}>
            <Link href="/">
              <a> Home </a>
            </Link>
            {user && (
              <>
                <Link href="/history">
                  <a> History </a>
                </Link>
                <IconButton>
                  <ShoppingCartOutlined />
                </IconButton>
              </>
            )}
            <Link href={user ? "/account" : "/login"}>
              <IconButton>
                <AccountCircleOutlined />
              </IconButton>
            </Link>
          </div>
          {user && (
            <div className={styles.navbar_shoppingCart}>
              <IconButton>
                <ShoppingCartOutlined />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

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
