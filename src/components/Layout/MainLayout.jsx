// src/components/Layout/MainLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';  // Ensure these components exist in the appropriate paths
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
    <Footer />
  </div>
);

export default MainLayout;
