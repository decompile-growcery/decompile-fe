import {
    AppBar, 
    Toolbar, 
    IconButton,
    BottomNavigation,
    BottomNavigationAction
} from "@material-ui/core"

import {
    FavoriteBorder, 
    ShoppingCartOutlined, 
    AccountCircleOutlined,
    HomeOutlined,
    HistoryOutlined
} from "@material-ui/icons"

import Link from "next/link";
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from "../styles/components/Navbar.module.scss"

export default function Navbar() {
    return (
        <nav>
            <AppBar className={styles.navbar} color="transparent" position="static">
                <Toolbar>
                    <span className={styles.navbar_logo}>
                        <Image src={logo} alt="logo"/>
                    </span>
                    <div>
                        <span className={styles.navbar_searchbar_icon}/>
                        <input className={styles.navbar_searchbar} placeholder="Search your favourite vegies here..."/>
                    </div>
                    <div className={styles.navbar_items}>
                        <Link href='/'>
                            <a> Home </a>
                        </Link>
                        <Link href='/history'>
                            <a> History </a>
                        </Link>
                        <IconButton>
                            <FavoriteBorder />
                        </IconButton>
                        <IconButton>
                            <ShoppingCartOutlined />
                        </IconButton>
                        <IconButton>
                            <AccountCircleOutlined />
                        </IconButton>
                    </div>
                    <div className={styles.navbar_shoppingCart}>
                        <IconButton>
                                <ShoppingCartOutlined />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <BottomNavigation className={styles.navbar_mobile}>
                <BottomNavigationAction icon={<HomeOutlined />} />
                <BottomNavigationAction icon={<FavoriteBorder />} />
                <BottomNavigationAction icon={<HistoryOutlined />} />
                <BottomNavigationAction icon={<AccountCircleOutlined />} />
            </BottomNavigation>
        </nav>
    )
}