import React from 'react';
import './Product.css'

const Product = ({product, cartHandler}) => {
    const {picture, name, price, gender, _id} = product;
    return (
        <div className='product-container'>
            <div className='product-img'>
                <img src={picture} alt="" />
            </div>
                <div className='product-info'>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div className='cart-btn-container'>
                    <button onClick={() => cartHandler(_id)} className='cart-btn'>Add to cart</button>
                </div>
        </div>
    );
};

export default Product;