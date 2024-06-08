import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="bg-slate-600 text-white p-4 rounded-lg shadow-md flex flex-col">
              <div className="flex justify-center mb-4">
                <img src={item.image} alt={item.title} className="object-contain h-48 w-48" />
              </div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm mb-1">Rating :- {item.Rating}</p>
              <p className="text-sm">Price: ${item.Price}</p>
              <Link to={'/payment'} className='text-center p-2 bg-[#75a6eb] text-black font-semibold rounded-md mt-2 active:bg-[#25354b] active:text-white transition-all' >Buy</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
