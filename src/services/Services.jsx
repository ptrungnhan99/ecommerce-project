import React from "react";
import { motion } from "framer-motion";
import "./services.scss";
import serviceData from "../assets/data/serviceData";
const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    {
                        serviceData?.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4">
                                <motion.div whileHover={{ scale: 1.1 }} className="service-item" style={{ background: `${item.bg}` }}>
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    );
}

export default Services;