// src/App.jsx
import React from 'react';
import { NotificationProvider } from './context/NotificationContext';
import Notification from './components/Notification';

const App = () => {
  return (
    <NotificationProvider>
      <div className="App">
        <h1>Notification System</h1>
        <Notification />
      </div>
    </NotificationProvider>
  );
};

export default App;
