import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../services/api";

const UserList = ({ onEdit, onAdd }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError("Failed to fetch users."));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(() => setError("Failed to delete user."));
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={onAdd}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
