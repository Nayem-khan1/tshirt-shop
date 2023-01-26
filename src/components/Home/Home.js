import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart, setToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([]);
    
    
    const cartHandler = id =>{
        let newCart = [];
        const selectedProduct = products.find(product => product._id === id);
        const exists = cart.find(product => product._id === id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart=[...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product._id !== id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        setToDb(id);
    }
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;   
                savedCart.push(addedProduct);      
            }
        }
        setCart(savedCart);
    }, [products])

    return (
        <div>
            <div className='shop-container'>
                <div className='product'>
                    {
                    products.map(product => <Product 
                    key={product._id}
                    product={product}
                    cartHandler={cartHandler}
                    ></Product>)
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

export default Home;