import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import hotelImage from '../Assets/Hotel_Background.jpg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');  // New state for email
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Clear any previous messages before making the request
    setMessage('');

    // Validate fields before making the request
    if (!username || !password || !role || !email) {
      setMessage('Please fill all the fields.');
      return;
    }

    try {
      // Sending the POST request to your backend with email
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        password,
        role,
        email,  // Include email in the request
      });

      // Handle successful registration
      if (response.status === 201) {
        setMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after successful registration
        }, 2000);
      }
    } catch (error) {
      // Handle error from the backend
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hotelImage})` }}>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Right Side - Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md p-10 bg-black bg-opacity-50 shadow-xl backdrop-blur-sm rounded-xl border-4 border-gray-700">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">Register</h2>
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
              />
            </div>

            {/* Role Field */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 bg-gray-700 text-white"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Simple Admin">Simple Admin</option>
                <option value="Staff">Staff</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </form>

          {/* Success/Error Message */}
          {message && <p className="mt-4 text-sm text-center text-white">{message}</p>}

          {/* Login Link */}
          <p className="mt-4 text-sm text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
