// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Ласкаво просимо до Task Manager!</h1>
        <p className="lead">Це ваша домашня сторінка. Використовуйте посилання нижче для навігації.</p>
        <hr className="my-4" />
        <p>Ось список доступних сторінок:</p>
        <div className="list-group">
          <Link to="/tasks" className="list-group-item list-group-item-action">
            Завдання
          </Link>
          <Link to="/users" className="list-group-item list-group-item-action">
            Користувачі
          </Link>
          <Link to="/attachments" className="list-group-item list-group-item-action">
            Прикріплення
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
