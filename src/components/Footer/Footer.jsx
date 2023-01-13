import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="logo">
                            <div>
                                <h1 className="text-white">MultiMart</h1>
                            </div>
                        </div>
                        <p className="footer-text mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae at enim veritatis ea iure repellendus. Porro maxime sunt explicabo!
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">
                                Top Categories
                            </h4>
                            <ul>
                                <li className="py-1">
                                    <Link to="#">Mobile Phone</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="#">Modern Sofa</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="#">Arm Chair</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="#">Smart Watches</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">
                                Userful Links
                            </h4>
                            <ul>
                                <li className="py-1">
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="py-1">
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-quick-links">
                            <h4 className="quick-links-title">
                                Contact
                            </h4>
                            <ul className="footer-contact">
                                <li className="py-1 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>789, HCM City</p>
                                </li>
                                <li className="py-1 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+08412727493</p>
                                </li>
                                <li className="py-1 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>example@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="footer-copy-right">
                            Copyright - {years} - Clone Dev. All rights reversed.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;