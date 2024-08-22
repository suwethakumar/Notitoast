// src/components/NotificationButton.jsx
import React from 'react';
import { useNotification } from '../context/NotificationContext';

const NotificationButton = () => {
  const { addNotification } = useNotification();

  const handleShowNotification = (type) => {
    addNotification({
      id: Date.now(),
      type,
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} notification!`,
    });
  };

  return (
    <div className="notification-buttons">
      <button onClick={() => handleShowNotification('success')}>Show Success</button>
      <button onClick={() => handleShowNotification('error')}>Show Error</button>
      <button onClick={() => handleShowNotification('info')}>Show Info</button>
      <button onClick={() => handleShowNotification('warning')}>Show Warning</button>
    </div>
  );
};

export default NotificationButton;
