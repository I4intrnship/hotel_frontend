// src/components/Sidebar.jsx
import React from 'react';
import { Menu } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined } from '@ant-design/icons';

const Sidebar = () => (
  <div style={{ width: 250, padding: '20px' }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        { label: 'Dashboard', key: '1', icon: <PieChartOutlined /> },
        { label: 'Manage Rooms', key: '2', icon: <DesktopOutlined /> },
        { label: 'Settings', key: '3', icon: <FileOutlined /> },
      ]}
    />
  </div>
);

export default Sidebar;
