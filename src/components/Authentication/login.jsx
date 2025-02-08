// src/components/Authentication/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hotelImage from '../Assets/Hotel_Background.jpg'; // Adjust the image path as necessary

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform validation checks
    if (username === '' || password === '') {
      setError('Please enter both username and password.');
      return;
    }

    try {
      // Make the API request to your backend for login
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the response contains the token
        if (data.token && data.role) {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);

          // Navigate to the admin dashboard or another page
          navigate('/admin-dashboard');
        } else {
          setError('Invalid response from server.');
        }
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error occurred:', err); // Log any error that occurs
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hotelImage})` }}>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Right Side - Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md p-10 bg-black bg-opacity-50 shadow-xl backdrop-blur-sm rounded-xl border-4 border-gray-700">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
                placeholder="Enter your password"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
