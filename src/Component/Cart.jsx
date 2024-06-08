import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.Price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item, index) => (
          <div key={index} className="bg-slate-600 text-white p-4 rounded-lg shadow-md flex flex-col">
            <div className="flex justify-center mb-4">
              <img src={item.image} alt={item.title} className="object-contain h-48 w-48" />
            </div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg font-semibold mb-2">Price: ${item.Price}</p>
            <button 
              onClick={() => removeFromCart(item)} 
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total Amount: ${totalAmount}</h2>
        <Link to="/payment" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block">
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
};

export default Cart;
