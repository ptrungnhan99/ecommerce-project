import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.scss";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
    const year = new Date().getFullYear();
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        const filterTrendingProducts = products.filter(item => (
            item.category === 'chair'
        ));
        const filterBestSalesProducts = products.filter(item => (
            item.category === 'sofa'
        ));
        const filterMobileProducts = products.filter(item => (
            item.category === 'mobile'
        ));
        const filterWirelessProducts = products.filter(item => (
            item.category === 'wireless'
        ))
        const filterPopularProducts = products.filter(item => (
            item.category === 'watch'
        ));
        setTrendingProducts(filterTrendingProducts);
        setBestSalesProducts(filterBestSalesProducts);
        setMobileProducts(filterMobileProducts);
        setWirelessProducts(filterWirelessProducts);
        setPopularProducts(filterPopularProducts);
    }, []);
    //console.log(trendingProducts);
    return (
        <Helmet title={'Home'}>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic ipsam voluptate ullam vitae libero odio officiis rerum sapiente.</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="btn-buy"><Link to="/shop">SHOP NOW</Link></motion.button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="hero-image">
                                <img src={heroImg} alt="hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <section className="trending-product">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-5">Trending Products</h2>
                        </div>
                        <ProductList data={trendingProducts} />
                    </div>
                </div>
            </section>
            <section className="best-sales">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-5">Best Sales</h2>
                        </div>
                        <ProductList data={bestSalesProducts} />
                    </div>
                </div>
            </section>
            <section className="timer-count">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="clock-top-content">
                                <h3 className="text-white fs-6 mb-2">Limited Offers</h3>
                                <h4 className="text-white fs-5 mb-3">Qualiti Chair</h4>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.2 }} className="btn-buy btn-store">
                                <Link to="/shop">Visit Store</Link>
                            </motion.button>
                        </div>
                        <div className="col-lg-6 col-md-6 text-end">
                            <img src={counterImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-5">New Arrivals</h2>
                        </div>
                        <ProductList data={mobileProducts} />
                        <ProductList data={wirelessProducts} />
                    </div>
                </div>
            </section>
            <section className="popular-category">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-5">Popular in Category </h2>
                        </div>
                        <ProductList data={popularProducts} />
                    </div>
                </div>
            </section>
        </Helmet>
    );
}

export default Home;