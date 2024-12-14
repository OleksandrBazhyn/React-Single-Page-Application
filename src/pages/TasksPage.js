import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((err) => console.error('Помилка при завантаженні завдань: ', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Завдання</h2>
      {tasks.length === 0 ? (
        <p>Немає завдань для відображення</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Назва завдання</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
