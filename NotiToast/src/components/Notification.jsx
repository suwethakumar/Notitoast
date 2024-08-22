// src/components/Notification.jsx
import React from 'react';
import { useNotification } from '../context/NotificationContext';
import './Notification.css';

const Notification = () => {
  const { addNotification } = useNotification();

  const handleSuccess = () => {
    addNotification({ id: Date.now(), type: 'success', message: 'Success notification!' });
  };

  const handleError = () => {
    addNotification({ id: Date.now(), type: 'error', message: 'Error notification!' });
  };

  const handleInfo = () => {
    addNotification({ id: Date.now(), type: 'info', message: 'Info notification!' });
  };

  const handleWarning = () => {
    addNotification({ id: Date.now(), type: 'warning', message: 'Warning notification!' });
  };

  return (
    <div className="notification-buttons">
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleInfo}>Show Info</button>
      <button onClick={handleWarning}>Show Warning</button>
    </div>
  );
};

export default Notification;
