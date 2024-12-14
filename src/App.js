import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import TaskList from './components/TaskList';
import AttachmentList from './components/AttachmentList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/attachments" element={<AttachmentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
