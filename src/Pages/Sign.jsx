import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const navigate = useNavigate(); 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const userData = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Signup successful! You can now log in.');
  };
   
  navigate("./home")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border rounded"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default Sign;
