import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, removeHandler}) => {
    const {picture, name, price, quantity, _id} = product;
    
    return (
        <div className='review-item-container'>
            <div className='order-review-img'>
                <img src={picture} alt="" />
            </div>
            <div className='review-item-info-container'>
                <div className='review-item-info'>
                    <p className='name'>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <button onClick={ ()=> removeHandler(_id)} className='remove-btn'>
                    <FontAwesomeIcon className='remove-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;