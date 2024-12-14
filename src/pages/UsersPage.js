import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';  // Перевірте, чи правильно вказано шлях до api.js

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        console.log('Отримані користувачі:', response.data);
        setUsers(response.data);
      })
      .catch((err) => console.error('Помилка:', err));
  }, []);
  

  return (
    <div className="container mt-5">
      <h2>Користувачі</h2>
      {users.length === 0 ? (
        <p>Немає користувачів для відображення</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );  
};

export default UsersPage;
