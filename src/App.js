import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import TasksPage from './pages/TasksPage';
import AttachmentsPage from './pages/AttachmentsPage';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Task Manager</Link>
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
              <li className="nav-item">
                <NavLink to="/landing" className="nav-link" activeClassName="active">Landing Page</NavLink> {/* Додайте цей пункт */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/attachments" element={<AttachmentsPage />} />
        <Route path="/landing" element={<LandingPage />} /> {/* Додайте цей маршрут */}
      </Routes>
    </Router>
  );
};

export default App;
