import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let quantity = 0;
    let price = 0;
    let tax = 0;
    let totalPrice = 0;
    if(cart){
        for(const product of cart){
            quantity = quantity + product.quantity; 
            price = price + product.price * product.quantity;
            tax = tax + (product.price * 0.1);
        }
    }
    totalPrice = price + tax;
    return (
        <div className='order-container'>
            <h2>Order Summary</h2>
            <div>
                <p>Product Item: {quantity}</p>
                <p>Price: ${price}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p className='name'>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;