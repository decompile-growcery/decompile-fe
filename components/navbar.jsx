import { useState } from "react";
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
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import styles from "../styles/components/Navbar.module.scss";
import useUser from "../lib/hooks/useUser";
<<<<<<< HEAD
import searchResult from "./searchResult";
import { Router, useRouter } from "next/dist/client/router";
=======
import { useRouter } from "next/dist/client/router";
import Cookies from "js-cookie";
>>>>>>> 2c868ade6fd7f4cb639a2bfb101d32113e5e8ddc

export default function Navbar() {
  const router = useRouter();
  const user = useUser();
<<<<<<< HEAD
  const router = useRouter()

  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  console.log(filteredData);
  const handleFilter = (event) => {

    setSearchWord(event.target.value)
    console.log(searchWord)
    const productInformation = searchResult(searchWord);
    //source: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val/38884856#38884856
    productInformation.then(function(result) {
      console.log(result)
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(result.props.productName)
      }
    })
  }

  //source: https://stackoverflow.com/questions/59888514/next-js-how-to-submit-a-form-to-another-page
  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  const searchSubmit = preventDefault(() => {
    router.push({
      pathname: `/productSearchResult/${searchWord}`
    })
  })

  console.log(searchWord);

=======
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    Cookies.remove('token');
    router.push("/");
  }
>>>>>>> 2c868ade6fd7f4cb639a2bfb101d32113e5e8ddc
  return (
    <nav>
      <AppBar className={styles.navbar} color="transparent" position="static">
        <Toolbar>
          <span className={styles.navbar_logo}>
            <Image src={logo} alt="logo" />
          </span>
          <form onSubmit={searchSubmit} className={styles.navbar_form}>
            <span className={styles.navbar_searchbar_icon} />
            <input
              className={styles.navbar_searchbar}
              placeholder="Search your favourite vegies here..."
              onChange={handleFilter}
              // onKeyPress= {(e) => handleKeyDown(e)}
            />
            {filteredData.length !=0 &&
              (<div className={styles.navbar_searchbar_dataResult}>
                {
                  (
                    <Link href={`/productSearchResult/${searchWord}`}>
                    <a className={styles.navbar_searchbar_dataResult_productItem}>
                      <p>{filteredData}</p>
                    </a>
                    </Link>
                  )
                }
              </div>
              )
            }
          </form>
          <div className={styles.navbar_items}>
            <Link href="/">
              <a> Home </a>
            </Link>
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
<<<<<<< HEAD
          {user &&
=======
          {user && (
>>>>>>> 2c868ade6fd7f4cb639a2bfb101d32113e5e8ddc
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
              <MenuItem>My Farm</MenuItem>
              <MenuItem onClick={handleLogout} className={styles.navbar_logout}>Logout</MenuItem>
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

