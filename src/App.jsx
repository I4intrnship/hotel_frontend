// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/Home/DashboardPage';
import RoomManagementPage from './components/Room/RoomManagementPage';
import LoginPage from './components/Authentication/login';  // Assuming you have a login page
import Register from './components/Authentication/register';  // Assuming you have a registration page
import MainLayout from './components/Layout/MainLayout';  // Layout for protected routes

// Utility function to check if the user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <MainLayout><DashboardPage /></MainLayout> : <Navigate to="/login" />}
        />
        <Route
          path="/manage-rooms"
          element={isAuthenticated() ? <MainLayout><RoomManagementPage /></MainLayout> : <Navigate to="/login" />}
        />

        {/* Catch-all route - redirect to login if not authenticated */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
