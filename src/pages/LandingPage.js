import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchTasks, fetchAttachments } from '../api';

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data))
      .catch((err) => console.error('Помилка при отриманні користувачів:', err));

    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((err) => console.error('Помилка при отриманні завдань:', err));

    fetchAttachments()
      .then((response) => setAttachments(response.data))
      .catch((err) => console.error('Помилка при отриманні прикріплень:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Ласкаво просимо до Task Manager!</h1>
      
      <div className="row mb-4">
        <div className="col">
          <h2>Користувачі</h2>
          <div className="card-columns">
            {users.length === 0 ? (
              <p>Немає користувачів для відображення</p>
            ) : (
              users.map((user) => (
                <div className="card" key={user.id}>
                  <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">{user.email}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="col">
          <h2>Завдання</h2>
          <div className="card-columns">
            {tasks.length === 0 ? (
              <p>Немає завдань для відображення</p>
            ) : (
              tasks.map((task) => (
                <div className="card" key={task.id}>
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2>Прикріплення</h2>
          <div className="card-columns">
            {attachments.length === 0 ? (
              <p>Немає прикріплень для відображення</p>
            ) : (
              attachments.map((attachment) => (
                <div className="card" key={attachment.id}>
                  <div className="card-body">
                    <a href={attachment.fileUrl} target="_blank" rel="noopener noreferrer">
                      Переглянути файл
                    </a>
                    <p>Завдання ID: {attachment.TaskId}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="fixed-bottom bg-light p-2 text-center">
        <h5>Контакти</h5>
        <p>Email: support@taskmanager.com</p>
        <p>Телефон: +1 (800) 123-4567</p>
      </div>
    </div>
  );
};

export default LandingPage;
