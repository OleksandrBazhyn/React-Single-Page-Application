import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';
import AttachmentsPage from './pages/AttachmentsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
        <Route path="/users" element={<UsersPage />} /> {/* Користувачі */}
        <Route path="/tasks" element={<TasksPage />} /> {/* Завдання */}
        <Route path="/attachments" element={<AttachmentsPage />} /> {/* Прикріплення */}
      </Routes>
    </Router>
  );
};

export default App;
