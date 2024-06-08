import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem('user');
    if (!storedUserData) {
      alert('No user found. Please sign up first.');
      return;
    }
    const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserData);
    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      <Naviagte to={'/home'}/>
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Log In</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/sign" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
