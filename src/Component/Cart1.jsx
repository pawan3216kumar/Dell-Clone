import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';

const Cart1 = () => {

    let navigate = useNavigate()

    const handleClick = () => {
        console.log("clickd");
        navigate('/cart')
    }

    return (
        <div className='flex gap-2' onClick={handleClick}>
            <div className='text-2xl '>
                <IoCartOutline/>
            </div>
            <div className='italic'>
                <h2>Cart</h2>
            </div>
        </div>
    )
}

export default Cart1;
