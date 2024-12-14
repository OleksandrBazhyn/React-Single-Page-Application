import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
