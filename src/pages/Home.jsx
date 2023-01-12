import React from "react";
import Helmet from "../components/Helmet/Helmet";
const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title={'Home'}>
            <section className="section-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus hic ipsam voluptate ullam vitae libero odio officiis rerum sapiente.</p>
                                <button className="btn-buy">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
}

export default Home;