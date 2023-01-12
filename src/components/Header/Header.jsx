import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
const Header = () => {
    const nav_links = [
        {
            path: "home",
            display: "Home"
        },
        {
            path: "shop",
            display: "Shop"
        },
        {
            path: "cart",
            display: "Cart"
        }
    ]
    return (
        <header className="header">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>MultiMart</h1>
                        </div>
                    </div>
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map((item, index) => (
                                    <li key={index} className="nav-item">
                                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav-active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav-icon">
                        <span className="fav-icon">
                            <i className="ri-heart-line"></i>
                            <span className="badge">1</span>
                        </span>
                        <span className="cart-icon">
                            <i className="ri-shopping-bag-line"></i>
                            <span className="badge">1</span>
                        </span>
                        <span>
                            <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
                        </span>
                    </div>
                    <div className="mobile-menu">
                        <span><i className="ri-menu-line"></i></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;