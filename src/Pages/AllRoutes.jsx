import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Sign from './Sign';
import Cart from './Cart';
import Product from './Product';
import AllBody from './AllBody';
import Payment from '../Component/Payment';

const AllRoutes = () => {
    return (
      
          <Routes>
                <Route path="/" element={<AllBody/>}/>
                <Route path = "/home" element = {<Home/>}/>
                <Route path="sign" element={<Sign />} />
                <Route path="login" element={<Login/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path='/payment' element={<Payment/>}/>
            </Routes>

            
    )
}

export default AllRoutes
