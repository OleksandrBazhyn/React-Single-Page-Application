import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Ласкаво просимо до Task Manager!</h1>
        <p className="lead">Це ваша домашня сторінка. Використовуйте посилання нижче для навігації.</p>
        <hr className="my-4" />
        <p>Ось список доступних сторінок:</p>
        <div className="list-group">
          <NavLink 
            to="/tasks" 
            className="list-group-item list-group-item-action" 
            activeClassName="active"
          >
            Завдання
          </NavLink>
          <NavLink 
            to="/users" 
            className="list-group-item list-group-item-action" 
            activeClassName="active"
          >
            Користувачі
          </NavLink>
          <NavLink 
            to="/attachments" 
            className="list-group-item list-group-item-action" 
            activeClassName="active"
          >
            Прикріплення
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
