import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';  // Перевірте, чи правильно вказано шлях до api.js

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  
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
      <h2 className="mb-4">Користувачі</h2>
      {users.length === 0 ? (
        <p>Немає користувачів для відображення</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Ім'я користувача</th>
                <th>Електронна пошта</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );  
};

export default UsersPage;
