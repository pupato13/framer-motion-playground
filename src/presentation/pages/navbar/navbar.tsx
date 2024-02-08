import React from "react";
import { Link } from "react-router-dom"

import Styles from "./navbar-styles.scss";

const NavBar: React.FC = () => {
    return (
        <div className={Styles.nav}>
            <div className={Styles.logo}>
                <Link className={Styles.navLink} to="/">Logo</Link>
            </div>
            <div className={Styles.navLinks}>
                <div className={Styles.navItem}>
                    <Link className={Styles.navLink} to="/">Home</Link>
                </div>
                <div className={Styles.navItem}>
                    <Link className={Styles.navLink} to="/about">About</Link>
                </div>
                <div className={Styles.navItem}>
                    <Link className={Styles.navLink} to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
