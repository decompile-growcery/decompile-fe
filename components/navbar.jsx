import { useState } from "react";
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
import searchResult from "./searchResult";
import { Router, useRouter } from "next/dist/client/router";

export default function Navbar() {
  const user = useUser();
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
            <Link href={user ? "/account" : "/login"}>
              <IconButton>
                <AccountCircleOutlined />
              </IconButton>
            </Link>
          </div>
          {user &&
            <Link href="/cart">
              <div className={styles.navbar_shoppingCart}>
                <IconButton>
                  <ShoppingCartOutlined />
                </IconButton>
              </div>
            </Link>
          }
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

