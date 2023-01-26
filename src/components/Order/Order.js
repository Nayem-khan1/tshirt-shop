import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const {initialCart} = useLoaderData();
    console.log(initialCart)
    const [cart, setCart] = useState(initialCart);

    const removeHandler = (id) =>{
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining);

        removeFromDb(id)
    }
    console.log(cart);
    return (
        <div>
            <div className='order-review-container'>
                <div className='margin'>
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            removeHandler={removeHandler}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart 
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;