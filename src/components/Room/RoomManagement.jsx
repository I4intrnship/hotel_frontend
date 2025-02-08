// src/components/RoomManagement.js
import React, { useState, useEffect } from 'react';
import { Button, Table, Card, Modal, Form, Input, Select, message } from 'antd';
import { AddCircleOutline } from '@mui/icons-material';

const { Option } = Select;

function RoomManagement() {
  const [rooms, setRooms] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  // Dummy room data (replace with real data)
  const dummyRooms = [
    { id: 1, roomNumber: '101', type: 'Single', status: 'Available' },
    { id: 2, roomNumber: '102', type: 'Double', status: 'Booked' },
    { id: 3, roomNumber: '103', type: 'Suite', status: 'Available' },
    { id: 4, roomNumber: '104', type: 'Single', status: 'Under Maintenance' },
  ];

  useEffect(() => {
    setRooms(dummyRooms);
  }, []);

  const showModal = (room = null) => {
    setCurrentRoom(room);
    setIsModalVisible(true);
  };

  const handleFormSubmit = (values) => {
    if (currentRoom) {
      // Updating an existing room
      setRooms((prevRooms) => prevRooms.map((room) => (room.id === currentRoom.id ? { ...room, ...values } : room)));
      message.success('Room updated successfully');
    } else {
      // Adding a new room
      const newRoom = { id: rooms.length + 1, ...values };
      setRooms((prevRooms) => [...prevRooms, newRoom]);
      message.success('Room added successfully');
    }
    setIsModalVisible(false);
    setCurrentRoom(null);
  };

  const handleDelete = (roomId) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    message.success('Room deleted successfully');
  };

  const columns = [
    { title: 'Room Number', dataIndex: 'roomNumber', key: 'roomNumber' },
    { title: 'Room Type', dataIndex: 'type', key: 'type' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => showModal(record)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card title="Manage Rooms" bordered={false}>
      <Button type="primary" icon={<AddCircleOutline />} onClick={() => showModal()} style={{ marginBottom: '20px' }}>
        Add New Room
      </Button>
      <Table columns={columns} dataSource={rooms} rowKey="id" pagination={{ pageSize: 5 }} />
      <Modal title={currentRoom ? 'Edit Room' : 'Add Room'} visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
        <Form initialValues={currentRoom || { type: 'Single', status: 'Available' }} onFinish={handleFormSubmit}>
          <Form.Item label="Room Number" name="roomNumber" rules={[{ required: true, message: 'Please input the room number!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Room Type" name="type" rules={[{ required: true, message: 'Please select the room type!' }]}>
            <Select>
              <Option value="Single">Single</Option>
              <Option value="Double">Double</Option>
              <Option value="Suite">Suite</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select the room status!' }]}>
            <Select>
              <Option value="Available">Available</Option>
              <Option value="Booked">Booked</Option>
              <Option value="Under Maintenance">Under Maintenance</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              {currentRoom ? 'Update Room' : 'Add Room'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default RoomManagement;
