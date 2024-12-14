import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';
import AttachmentsPage from './pages/AttachmentsPage';

const App = () => {
  return (
    <Router>
      {/* Навігаційне меню */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Task Manager</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>Головна</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tasks" className="nav-link" activeClassName="active">Завдання</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link" activeClassName="active">Користувачі</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/attachments" className="nav-link" activeClassName="active">Прикріплення</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Головний вміст */}
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
          <Route path="/users" element={<UsersPage />} /> {/* Користувачі */}
          <Route path="/tasks" element={<TasksPage />} /> {/* Завдання */}
          <Route path="/attachments" element={<AttachmentsPage />} /> {/* Прикріплення */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
