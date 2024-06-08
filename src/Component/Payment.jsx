import React, { useState } from 'react';

const Payment = ({ cartItems }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', paymentDetails);
    console.log('Order Details:', cartItems);
    // Handle payment processing here
    alert('Payment Successful!');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Card Number</label>
          <input 
            type="text" 
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Expiry Date</label>
          <input 
            type="text" 
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">CVV</label>
          <input 
            type="text" 
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Name on Card</label>
          <input 
            type="text" 
            name="nameOnCard"
            value={paymentDetails.nameOnCard}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
