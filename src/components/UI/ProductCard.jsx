import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/product-card.scss";
const ProductCard = ({ item }) => {
    return (
        <div className="col-lg-3 col-md-4 mb-2">
            <div className="product-item">
                <div className="product-image">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className="product-info p-2">
                    <h3 className="product-name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>{item.category}</span>
                </div>
                <div className="product-item-bottom p-2">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;