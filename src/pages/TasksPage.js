import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api';  // Перевірте, чи правильно вказано шлях до api.js

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((err) => setError('Помилка при завантаженні завдань: ' + err.message));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Завдання</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
